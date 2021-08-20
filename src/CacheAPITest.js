async function CacheAPITest(){
    //https://web.dev/cache-api-quick-guide/
    //https://blog.bitsrc.io/introduction-to-the-cache-storage-a-new-browser-cache-pwa-api-a5d7426a2456
    const cache = await caches.open('gao-cache');
    console.dir(cache)
    cache.put('/src/data.json', new Response('{"foo": "bar"}'));
    //return true
}

export default CacheAPITest;