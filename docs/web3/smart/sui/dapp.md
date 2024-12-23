# DAPP开发

## [SUI SDK](https://sdk.mystenlabs.com/dapp-kit?ref=blog.sui.io)

<DocsAD/>

```js
import { useSuiClientQuery } from '@mysten/dapp-kit';
 
function MyComponent() {
	const { data, isPending, error, refetch } = useSuiClientQuery('getOwnedObjects', {
		owner: '0x123',
	});
 
	if (isPending) {
		return <div>Loading...</div>;
	}
 
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```