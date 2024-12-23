# DAPP

## [EOS SDK](https://wharfkit.com/guides/session-kit/getting-started-web-app)

<DocsAD/>

```js
import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"

const webRenderer = new WebRenderer()

const sessionKit = new SessionKit({
  appName: "appname",
  chains: [
    {
      id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      url: "https://jungle4.greymass.com",
    },
  ],
  ui: webRenderer,
  walletPlugins: [new WalletPluginAnchor()],
})
```