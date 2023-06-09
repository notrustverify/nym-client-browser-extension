const nym = await createNymMixnetClient()


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
    
    await nym.client.start({
        clientId: 'pastenymClient',
        nymApiUrl,
        preferredGatewayIdentityKey: preferredGatewayIdentityKey,
        gatewayListener: gatewayListener,
    })