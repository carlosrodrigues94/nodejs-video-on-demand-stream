class VideoMediaPlayer {
  constructor() {
    this.videoElement = null
    this.sourceBuffer = null
  }

  initializeCodec(){
    this.videoElement = document.getElementById('vid')
    const mediaSourceSupported = !!window.MediaSource
    if(!mediaSourceSupported){
      alet('Seu browser ou sistema não tem suporte a MSE!')
      return
    }

    console.log('manifst', this.manifestJSON)
    const codecSupported = MediaSource.isTypeSupported(this.manifestJSON.codec)

    if(!codecSupported){
      alert(`Seu browser não ofecere suporte ao codec:${this.manifestJSON.codec}`)
    }
  }
}