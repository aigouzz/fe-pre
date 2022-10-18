<template>
    <div>
        <font size="3" face="fantasy">MIT Licensed | Copyright © 2022-present gxc</font>
        <img src="logo.png"/>
    </div>
</template>
<script>
export default{
    mounted() {
        if(window.performance) {
            setTimeout(() => {
                let timing = performance.timing;
                let dns = timing.connectEnd - timing.connectStart;
                let ttfb = timing.responseStart - timing.navigationStart;
                let fp = timing.domInteractive - timing.navigationStart;
                let dom = timing.domComplete - timing.responseEnd;
                let lcp = timing.domContentLoadedEventEnd - timing.navigationStart;
                console.log(`dns寻址时间：${dns}, 首字节到达时间：${ttfb}, 首屏渲染时间：${fp}，dom解析时间：${dom}, 首屏时间：${lcp}`);
            }, 1000);
        }
    }
}
</script>