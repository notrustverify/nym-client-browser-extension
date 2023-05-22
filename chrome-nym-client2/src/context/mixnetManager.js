import { createNymMixnetClient } from '@nymproject/sdk'

export async function connectMixnet() {
     window.nym = await createNymMixnetClient()


    const nymApiUrl = 'https://validator.nymtech.net/api'

    let preferredGatewayIdentityKey =
        'E3mvZTHQCdBvhfr178Swx9g4QG3kkRUun7YnToLMcMbM'

    // WSS is mandatory for HTTPS website
    let gatewayListener = 'wss://gateway1.nymtech.net:443'

    // give the possibility to not force the gateway to use. Can be useful for tor hidden service.
    if (process.env.WS_CONNECTION) {
        preferredGatewayIdentityKey = ''
        gatewayListener = ''
    }

    // start the client and connect to a gateway
    
    await window.nym.client.start({
        clientId: 'pastenymClient',
        nymApiUrl,
        preferredGatewayIdentityKey: preferredGatewayIdentityKey,
        gatewayListener: gatewayListener,
    })

    window.nym.events.subscribeToConnected((e) => {
        console.log(e)
        window.nymReady = true
      })

    return

}

export function sendMessage(payload, recipient, numberOfSurbs){

    if (numberOfSurbs === undefined)
            numberOfSurbs = 20

    window.nym.client.rawSend( { payload: new TextEncoder.encode(payload), recipient: recipient,replySurbs: numberOfSurbs})
}