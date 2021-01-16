const MANIFEST_URL = "manifest.json";

const localHost = ["127.0.0.1", "localhost"];

async function main() {
  console.log('executou')
  const isLocal = !!~localHost.indexOf(window.location.hostname);

  console.log("is local? => ", isLocal);
  const manifestJSON = await (await fetch(MANIFEST_URL)).json();

  const host = isLocal ? manifestJSON.localHost : manifestJSON.productionHost;

  const videoComponent = new VideoComponent();

  console.log('Manifest', manifestJSON)

  const videoPlayer = new VideoMediaPlayer({manifestJSON})

  videoPlayer.initializeCodec()
  videoComponent.initializePlayer();
}

window.onload = main;
