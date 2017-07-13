/* eslint-disable no-console */
import RPCProvider from 'web3-provider-engine/subproviders/rpc';
import createPayload from 'web3-provider-engine/util/create-payload';
import xhr from 'xhr';

export default class SigmateSubprovider extends RPCProvider {
  handleRequest(payload, next, end) {
    const self = this;
    const targetUrl = self.rpcUrl;
    const method = payload.method;
    const newPayload = createPayload(payload);

    xhr({
      uri: targetUrl,
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newPayload),
      rejectUnauthorized: false,
    }, (err, res, body) => {
      if (err) return end(err);
      if (res.statusCode !== 200) return end(new Error(`HTTP Error: ${res.statusCode} on ${method}`));

      // parse response into raw account
      let data;
      try {
        data = JSON.parse(body);
        if (data.error) return end(data.error);
      } catch (error) {
        console.error(error.stack);
        return end(error);
      }
      // console.log('network:', payload.method, payload.params, '->', data.result);
      return end(null, data.result);
    });
  }

}
