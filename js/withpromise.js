const DEFAULT_TIMEOUT = 3000;
const VALID_VALUE = 200;
const VALID_VALUE2 = 300
const SUCCESS = 'success';
const FAILED = 'failed';
class HeavyWorkerPromise {
    doHeavyWork(input) {
        let workerpromise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    let status = input >= VALID_VALUE ? SUCCESS : FAILED;

                    if (status) {
                        resolve({
                            status
                        });
                    } else {
                        reject({
                            status
                        });
                    }
                }, DEFAULT_TIMEOUT);
            });
        return workerpromise;
    }
}

class HeavyWorkerPromise2 {
    doHeavyWork(input) {
        let workerpromise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    let status = input >= VALID_VALUE2 ? SUCCESS : FAILED;

                    if (status) {
                        resolve({
                            status
                        });
                    } else {
                        reject({
                            status
                        });
                    }
                }, DEFAULT_TIMEOUT);
            });
        return workerpromise;
    }
}

export { HeavyWorkerPromise, HeavyWorkerPromise2 };