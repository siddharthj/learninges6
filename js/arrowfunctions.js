class DataProcessor {
    process(...callbacks) {
        let result = 0;
        for (let index in callbacks) {
            let callback = callbacks[index];
            let validation = callback && typeof callback === 'function';

            let [inputA, inputB] = [10, 20];

            if (validation) {
                result += callback(inputA, inputB);
            }
        }
        this.result = result;
        // lexical this resolved by this pointer
        return () => this.result;
    }
}

export { DataProcessor };