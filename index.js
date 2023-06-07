const clientId = '1115242078423765072';

const DiscordRPC = require('discord-rpc');

const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {

  if (!RPC) return;

  RPC.setActivity({

    details: ``,

    state: ``,

    startTimestamp: Date.now(),

    largeImageKey: ``,

    largeImageText: ``,

    instance: false,

    buttons: [

      {

        label: ``,

        url: ``

      },

      {

        label: ``,

        url: ``

      }

    ]

  });

}

RPC.on('ready', async () => {

  setActivity();

  setInterval(() => {

      setActivity();

  }, 15 * 1000);

});

RPC.login({ clientId }).catch(err => console.log(err));
