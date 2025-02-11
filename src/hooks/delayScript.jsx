import { useEffect } from 'react';

function delayScript() {
    useEffect(() => {
        const autoLoadDuration = 5; //In Seconds
        const eventList = ['keydown', 'mousemove', 'wheel', 'touchmove', 'touchstart', 'touchend'];
        // eslint-disable-next-line no-undef
        const autoLoadTimeout = setTimeout(runScripts, autoLoadDuration * 1000);

        eventList.forEach(function (event) {
            // eslint-disable-next-line no-undef
            window.addEventListener(event, triggerScripts, { passive: true });
        });

        function triggerScripts() {
            runScripts();

            // eslint-disable-next-line no-undef
            clearTimeout(autoLoadTimeout);
            eventList.forEach(function (event) {
                // eslint-disable-next-line no-undef
                window.removeEventListener(event, triggerScripts, { passive: true });
            });
        }

        function runScripts() {
            // eslint-disable-next-line no-undef
            document.querySelectorAll('script[delay]').forEach(function (scriptTag) {
                scriptTag.setAttribute('src', scriptTag.getAttribute('delay'));
            });
        }
    }, []);

    // return status;
    return null;
}

export default delayScript;
