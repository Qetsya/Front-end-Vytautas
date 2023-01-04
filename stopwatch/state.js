const state = {
    secondsElapsed: 0,

    intervalID: null,


    start(updateCallBack) {
        //paleisti intervala
        if (!state.intervalID) {
            console.log("start interval", updateCallBack)
            state.intervalID = setInterval(function () {
                state.secondsElapsed++;
                updateCallBack(state.secondsElapsed);
            }, 1000);
        }
    },

    stop() {
        //sustabdo intervala
        if (state.intervalID) {
            clearInterval(state.intervalID);
            state.intervalID = null;
        }
    },
};

export default state;