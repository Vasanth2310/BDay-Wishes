// Web Audio API Synthesizer & Sound Effects
// Works 100% offline, zero external asset dependencies, crystal clear audio

class SoundManager {
  constructor() {
    this.ctx = null;
    this.bgMusicPlaying = false;
    this.bgMusicTimer = null;
    this.isMuted = false;
    this.volume = 0.55;
    this.externalAudio = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle chime tone
  playChime(freq = 587.33, duration = 0.8, type = 'sine') {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2 * this.volume, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  // Sparkle magical arpeggio
  playSparkle() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.45, 'sine');
      }, idx * 60);
    });
  }

  // Candle blow whoosh sound
  playBlowOut() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      // White noise buffer for gentle breath/wind
      const bufferSize = this.ctx.sampleRate * 0.9;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.8);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4 * this.volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.85);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  // Bubble pop
  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3 * this.volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  // Celebration fanfare chords
  playFanfare() {
    if (this.isMuted) return;
    const chords = [
      [523.25, 659.25, 783.99], // C major
      [587.33, 698.46, 880.00], // D minor
      [659.25, 783.99, 987.77], // E minor
      [783.99, 987.77, 1174.66, 1318.51] // G major / C maj high
    ];
    chords.forEach((chord, step) => {
      setTimeout(() => {
        chord.forEach(freq => this.playChime(freq, 0.7, 'triangle'));
      }, step * 240);
    });
  }

  // Gentle music-box style Happy Birthday melody
  // Notes: G4 G4 A4 G4 C5 B4 | G4 G4 A4 G4 D5 C5 | G4 G4 G5 E5 C5 B4 A4 | F5 F5 E5 C5 D5 C5
  startSynthesizedLofiMusic() {
    if (this.bgMusicPlaying) return;
    this.bgMusicPlaying = true;
    this.init();

    const melody = [
      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 440.00, d: 0.65, pause: 600 }, // A4
      { f: 392.00, d: 0.65, pause: 600 }, // G4
      { f: 523.25, d: 0.70, pause: 650 }, // C5
      { f: 493.88, d: 1.10, pause: 1100 }, // B4

      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 440.00, d: 0.65, pause: 600 }, // A4
      { f: 392.00, d: 0.65, pause: 600 }, // G4
      { f: 587.33, d: 0.70, pause: 650 }, // D5
      { f: 523.25, d: 1.10, pause: 1100 }, // C5

      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 392.00, d: 0.35, pause: 400 }, // G4
      { f: 783.99, d: 0.70, pause: 650 }, // G5
      { f: 659.25, d: 0.70, pause: 650 }, // E5
      { f: 523.25, d: 0.60, pause: 600 }, // C5
      { f: 493.88, d: 0.60, pause: 600 }, // B4
      { f: 440.00, d: 1.10, pause: 1100 }, // A4

      { f: 698.46, d: 0.35, pause: 400 }, // F5
      { f: 698.46, d: 0.35, pause: 400 }, // F5
      { f: 659.25, d: 0.70, pause: 650 }, // E5
      { f: 523.25, d: 0.65, pause: 650 }, // C5
      { f: 587.33, d: 0.70, pause: 700 }, // D5
      { f: 523.25, d: 1.40, pause: 2400 } // C5 (held gently, then loops)
    ];

    let noteIdx = 0;

    const playNext = () => {
      if (!this.bgMusicPlaying) return;
      const note = melody[noteIdx];
      if (!this.isMuted) {
        this.playMusicBoxNote(note.f, note.d);
      }
      noteIdx = (noteIdx + 1) % melody.length;
      this.bgMusicTimer = setTimeout(playNext, note.pause);
    };

    playNext();
  }

  playMusicBoxNote(freq, duration) {
    if (!this.ctx || this.isMuted) return;
    try {
      // Warm music box bell timbre using dual sine oscillators + soft bell harmonics
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08 * this.volume, this.ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + duration);
      osc2.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  stopSynthesizedMusic() {
    this.bgMusicPlaying = false;
    if (this.bgMusicTimer) {
      clearTimeout(this.bgMusicTimer);
      this.bgMusicTimer = null;
    }
  }

  toggleMusic() {
    if (this.bgMusicPlaying) {
      this.stopSynthesizedMusic();
      return false;
    } else {
      this.startSynthesizedLofiMusic();
      return true;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
  }
}

export const sounds = new SoundManager();

