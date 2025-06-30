class PomodoroTimer {
    constructor() {
        this.workTime = 25 * 60; // 25分
        this.breakTime = 5 * 60; // 5分
        this.currentTime = this.workTime;
        this.isRunning = false;
        this.isWorkTime = true;
        this.sessionCount = 0;
        this.timer = null;
        
        // DOM要素
        this.minutesDisplay = document.getElementById('minutes');
        this.secondsDisplay = document.getElementById('seconds');
        this.startBtn = document.getElementById('start-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.modeText = document.getElementById('mode-text');
        this.sessionCountDisplay = document.getElementById('session-count');
        this.nextSessionText = document.getElementById('next-session-text');
        this.modeIndicator = document.querySelector('.mode-indicator');
        
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.toggleTimer());
        this.resetBtn.addEventListener('click', () => this.resetTimer());
    }
    
    toggleTimer() {
        if (this.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }
    
    startTimer() {
        this.isRunning = true;
        this.startBtn.querySelector('.btn-text').textContent = '停止';
        
        this.timer = setInterval(() => {
            this.currentTime--;
            this.updateDisplay();
            
            if (this.currentTime <= 0) {
                this.switchMode();
            }
        }, 1000);
    }
    
    stopTimer() {
        this.isRunning = false;
        this.startBtn.querySelector('.btn-text').textContent = '開始';
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    resetTimer() {
        this.stopTimer();
        this.isWorkTime = true;
        this.currentTime = this.workTime;
        this.sessionCount = 0;
        this.updateDisplay();
        this.updateModeIndicator();
    }
    
    switchMode() {
        if (this.isWorkTime) {
            // 作業時間終了 → 休憩時間開始
            this.isWorkTime = false;
            this.currentTime = this.breakTime;
            this.sessionCount++;
            this.playNotification('休憩時間です！');
        } else {
            // 休憩時間終了 → 作業時間開始
            this.isWorkTime = true;
            this.currentTime = this.workTime;
            this.playNotification('作業時間です！');
        }
        
        this.updateModeIndicator();
        this.updateDisplay();
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime % 60;
        
        this.minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        this.secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        
        this.sessionCountDisplay.textContent = this.sessionCount;
        this.nextSessionText.textContent = this.isWorkTime ? '次: 休憩時間' : '次: 作業時間';
    }
    
    updateModeIndicator() {
        if (this.isWorkTime) {
            this.modeText.textContent = '作業時間';
            this.modeIndicator.classList.remove('break');
        } else {
            this.modeText.textContent = '休憩時間';
            this.modeIndicator.classList.add('break');
        }
    }
    
    playNotification(message) {
        // ブラウザの通知APIを使用
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('ポモドーロタイマー', {
                body: message,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23333"/><circle cx="50" cy="50" r="20" fill="white"/></svg>'
            });
        }
        
        // 音声通知（オプション）
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(message);
            utterance.lang = 'ja-JP';
            speechSynthesis.speak(utterance);
        }
    }
}

// ページ読み込み時にタイマーを初期化
document.addEventListener('DOMContentLoaded', () => {
    // 通知の許可を求める
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
    
    new PomodoroTimer();
}); 