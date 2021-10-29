<template>
    <div id="app" class="d-flex flex-column align-items-center bg-gray mt-5">
        <div class="vh-75 calculation-box d-flex flex-column bg-dark p-1">
            <div class="d-flex flex-row-reverse mt-1 mr-4 pr-3">
                <h1 v-if="isDecimal()">{{ decOutput }}</h1>
                <h1 v-else >0x{{ hexOutput }}</h1>
            </div>
            <div class="d-flex justify-content-center mt-1">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary btn-sm" v-if="isDecimal()">10</button>
                    <button type="button" class="btn btn-secondary btn-sm" v-on:click="switchDecimal()" v-else>10</button>
                    <button type="button" class="btn btn-primary btn-sm" v-if="isHex()">16</button>
                    <button type="button" class="btn btn-secondary btn-sm" v-on:click="switchHex()" v-else>16</button>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-around flex-wrap mt-2">
                <div class="binary col-1 mr-3 my-2" v-for="(key, index) in binaryArray" :key="index">{{ key }}</div>
            </div>
            <template v-if="decOutput >= 2**64">
                <div class="buttons d-flex justify-content-center flex-wrap pt-1">
                    <button class="disabledButton" disabled value="D"><h4>D</h4></button>
                    <button class="disabledButton" disabled value="E"><h4>E</h4></button>
                    <button class="disabledButton" disabled value="F"><h4>F</h4></button>
                    <button class="button bg-darkgray" value="AC" v-on:click="allClear"><h4>AC</h4></button>
                    <button class="disabledButton" disabled value="A"><h4>A</h4></button>
                    <button class="disabledButton" disabled value="B"><h4>B</h4></button>
                    <button class="disabledButton" disabled value="C"><h4>C</h4></button>
                    <button class="button bg-orange" value="/" v-on:click="addCurrentOperator('/')"><h4>÷</h4></button>
                    <button class="disabledButton" disabled value="7"><h4>7</h4></button>
                    <button class="disabledButton" disabled value="8"><h4>8</h4></button>
                    <button class="disabledButton" disabled value="9"><h4>9</h4></button>
                    <button class="button bg-orange" value="*" v-on:click="addCurrentOperator('*')"><h4>x</h4></button>
                    <button class="disabledButton" disabled value="4"><h4>4</h4></button>
                    <button class="disabledButton" disabled value="5"><h4>5</h4></button>
                    <button class="disabledButton" disabled value="6"><h4>6</h4></button>
                    <button class="button bg-orange" value="-" v-on:click="addCurrentOperator('-')"><h4>-</h4></button>
                    <button class="disabledButton" disabled value="1"><h4>1</h4></button>
                    <button class="disabledButton" disabled value="2"><h4>2</h4></button>
                    <button class="disabledButton" disabled value="3"><h4>3</h4></button>
                    <button class="button bg-orange" value="+" v-on:click="addCurrentOperator('+')"><h4>+</h4></button>
                    <button class="disabledButton" disabled value="FF"><h4>FF</h4></button>
                    <button class="disabledButton" disabled value="0"><h4>0</h4></button>
                    <button class="disabledButton" disabled value="00"><h4>00</h4></button>
                    <button class="button bg-orange" v-on:click="showEqual()"><h4>=</h4></button>
                </div>
            </template>
            <template v-else>
                <div class="buttons d-flex justify-content-center flex-wrap pt-1">
                    <button class="disabledButton" disabled value="D" v-if="isDecimal()"><h4>D</h4></button>
                    <button class="button bg-secondary" value="D" v-on:click="addCurrentOperand('D')" v-else><h4>D</h4></button>
                    <button class="disabledButton" disabled value="E" v-if="isDecimal()"><h4>E</h4></button>
                    <button class="button bg-secondary" value="E" v-on:click="addCurrentOperand('E')" v-else><h4>E</h4></button>
                    <button class="disabledButton" disabled value="F" v-if="isDecimal()"><h4>F</h4></button>
                    <button class="button bg-secondary" value="F" v-on:click="addCurrentOperand('F')" v-else><h4>F</h4></button>
                    <button class="button bg-darkgray" value="AC" v-on:click="allClear"><h4>AC</h4></button>
                    <button class="disabledButton" disabled value="A" v-if="isDecimal()"><h4>A</h4></button>
                    <button class="button bg-secondary" value="A" v-on:click="addCurrentOperand('A')" v-else><h4>A</h4></button>
                    <button class="disabledButton" disabled value="B" v-if="isDecimal()"><h4>B</h4></button>
                    <button class="button bg-secondary" value="B" v-on:click="addCurrentOperand('B')" v-else><h4>B</h4></button>
                    <button class="disabledButton" disabled value="C" v-if="isDecimal()"><h4>C</h4></button>
                    <button class="button bg-secondary" value="C" v-on:click="addCurrentOperand('C')" v-else><h4>C</h4></button>
                    <button class="button bg-orange" value="/" v-on:click="addCurrentOperator('/')"><h4>÷</h4></button>
                    <button class="button bg-secondary" value="7" v-on:click="addCurrentOperand('7')"><h4>7</h4></button>
                    <button class="button bg-secondary" value="8" v-on:click="addCurrentOperand('8')"><h4>8</h4></button>
                    <button class="button bg-secondary" value="9" v-on:click="addCurrentOperand('9')"><h4>9</h4></button>
                    <button class="button bg-orange" value="*" v-on:click="addCurrentOperator('*')"><h4>x</h4></button>
                    <button class="button bg-secondary" value="4" v-on:click="addCurrentOperand('4')"><h4>4</h4></button>
                    <button class="button bg-secondary" value="5" v-on:click="addCurrentOperand('5')"><h4>5</h4></button>
                    <button class="button bg-secondary" value="6" v-on:click="addCurrentOperand('6')"><h4>6</h4></button>
                    <button class="button bg-orange" value="-" v-on:click="addCurrentOperator('-')"><h4>-</h4></button>
                    <button class="button bg-secondary" value="1" v-on:click="addCurrentOperand('1')"><h4>1</h4></button>
                    <button class="button bg-secondary" value="2" v-on:click="addCurrentOperand('2')"><h4>2</h4></button>
                    <button class="button bg-secondary" value="3" v-on:click="addCurrentOperand('3')"><h4>3</h4></button>
                    <button class="button bg-orange" value="+" v-on:click="addCurrentOperator('+')"><h4>+</h4></button>
                    <button class="disabledButton" disabled value="FF" v-if="isDecimal()"><h4>FF</h4></button>
                    <button class="button bg-secondary" value="FF" v-on:click="addCurrentOperand('FF')" v-else><h4>FF</h4></button>
                    <button class="button bg-secondary" value="0" v-on:click="addCurrentOperand('0')"><h4>0</h4></button>
                    <button class="button bg-secondary" value="00" v-on:click="addCurrentOperand('00')"><h4>00</h4></button>
                    <button class="button bg-orange" v-on:click="showEqual()"><h4>=</h4></button>
                </div>
            </template>  
        </div>
    </div>
</template>

<script>

export default {
    name: 'calculator',
    data(){
        return {
            decOutput: '0',
            hexOutput: '0',
            currentOperand: '',
            currentOperator: '',
            mode: "decimal",
            nums: [],
            ops: [],
            binaryArray: [
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
                "0000",
            ],
            hexMap:{
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                FF: 255
            },
            hexArray:['A','B','C','D','E','F','FF']

        }
    },
    methods: {
        addCurrentOperand(operand){
            this.currentOperand += operand;
            this.decOutput = this.mode === "hex" ? this.hexToDecimal(this.currentOperand) : this.currentOperand;
            this.hexOutput = this.mode === "decimal" ? this.decimalToHexadecimal(this.currentOperand) : this.currentOperand;
            this.insert4bitsBinary() 
        },

        addOperandDecimal(){
            if(this.hexArray.indexOf(this.currentOperand) != -1) this.nums.push(parseInt(this.hexMap[this.currentOperand]));
            else this.nums.push(parseInt(this.currentOperand));
            this.currentOperand = '';
        },
    
        addCurrentOperator(operator){
            this.currentOperator = operator;

            this.addOperandDecimal();
            this.control();
            
            this.addOperator();
            let topNumberStack = this.nums[this.nums.length - 1]

            if(topNumberStack < 0) this.decOutput = this.turnOverMinus(topNumberStack);
            else if(topNumberStack > 2**64) this.decOutput = this.turnOverPlus(topNumberStack);
            else this.decOutput = topNumberStack;

            this.insert4bitsBinary()
            this.hexOutput = this.decimalToHexadecimal(topNumberStack);
        },

        control(){
            const operator1 = this.ops[this.ops.length - 1];
            const operator2 = this.currentOperator;

            if(
                this.currentOperand !== "" ||
                this.currentOperator === "" ||
                this.nums.length === 1 ||
                this.ops.length === 0 ||
                this.getPriority(operator1) < this.getPriority(operator2)
            )return;

            this.calcurator();
            this.control();
        },

        addOperator(){
            this.ops.push(this.currentOperator)
            this.currentOperator = '';
        },

        calcurator(){
            if(this.nums.length === 1) return;
            
            const op = this.ops[this.ops.length - 1];
            const left = this.nums[this.nums.length - 2];
            const right = this.nums[this.nums.length - 1];
            let value = 0;

            switch(op){
                case '+': value = left + right; break;
                case '-': value = left - right; break;
                case '*': value = left * right; break;
                case '/': value = Math.floor(left / right); break;
            }

            this.nums.splice(this.nums.length - 2, 1, value);
            this.nums.pop();
            this.ops.pop();
            this.calcurator();
        },

        showEqual(){
            this.addOperandDecimal();
            this.calcurator();
            let topNumberStack = this.nums[this.nums.length - 1];

            if(topNumberStack < 0) this.decOutput = this.turnOverMinus(topNumberStack);
            else if(topNumberStack >= 2**64) this.decOutput = this.turnOverPlus(topNumberStack);
            else this.decOutput = topNumberStack;

            this.hexOutput = this.decimalToHexadecimal(topNumberStack);
            this.insert4bitsBinary();
        },

        //Javascript is not accurate over 54 bits. bigInt did not work on this evironment.
        //2 ** 64 = 18446744073709552000
        turnOverMinus(number){
            let newNumber = 0;
            newNumber = 2**64 + number;
            return newNumber;            
        },

        turnOverPlus(number){
            let newNumber = 0;
            newNumber = 2**64 - number;
            return newNumber;
        },

        allClear(){
            this.decOutput = '0';
            this.hexOutput = '0';
            this.currentOperand = '';
            this.currentOperator = '';
            this.nums = [];
            this.ops = [];
            this.clearBinaryArray();
        },

        clearBinaryArray(){
            for(let i = 0; i < this.binaryArray.length; i++){
                this.binaryArray[i] = "0000";
            }
        },

        getPriority(operator) {
            if (operator == '+' || operator == '-') return 1;
            else if (operator == '*' || operator == '/') return 2;
        },

        isDecimal(){
            return this.mode === "decimal";
        },

        isHex(){
            return this.mode === "hex";
        },

        switchDecimal(){
            this.mode = "decimal";
            this.decOutput = this.hexToDecimal(this.hexOutput);
            this.currentOperand = this.currentOperand === '' ? this.currentOperand = '' : this.hexToDecimal(this.currentOperand);
        },

        switchHex(){
            this.mode = "hex";
            this.hexOutput = this.decimalToHexadecimal(this.decOutput);
            this.currentOperand = this.currentOperand === '' ? this.currentOperand = '' : this.decimalToHexadecimal(this.currentOperand);
        },

        decimalToHexadecimal(number){
            let decNumber = parseInt(number);
            let hexadecimal = "0123456789ABCDEF";
            let hex = '';
            let currentHex = 0;

            while (decNumber > 0) {
                currentHex = decNumber % 16;
                hex = hexadecimal[currentHex] + hex;
                decNumber = Math.floor(decNumber/16);
            }
            return hex === '' ? '0' : hex;
        },

        hexToDecimal(number){
            let tempHex = Array.from(number).reverse();
            let result = 0;
            for(let i = 0; i < tempHex.length; i++){
                if(this.hexArray.indexOf(tempHex[i]) != -1) result += this.hexMap[tempHex[i]] * (16**i);
                else result += tempHex[i] * (16**i);
            }
            return result;
        },

        decimalToBinary(number){
            let decNumber = parseInt(number);
            let binary = '';
            while(decNumber > 1){
                binary = decNumber % 2 + binary;
                decNumber = Math.floor(decNumber/2);
            }
            return decNumber + binary;
        },

        insert4bitsBinary(){
            let tempHex = Array.from(this.hexOutput).reverse();
            const binaryTail = this.binaryArray.length - 1;
            for(let i = 0; i < tempHex.length; i++){
                this.binaryArray[binaryTail - i] = this.hexArray.indexOf(tempHex[i]) == -1 ? this.decimalToBinary(tempHex[i]) : this.decimalToBinary(this.hexMap[tempHex[i]]);
                let currentBinary = this.binaryArray[binaryTail - i];
                let l = this.binaryArray[binaryTail - i].length;
                if(l < 4) this.binaryArray[binaryTail - i] = Array(5 - l).join("0") + currentBinary;
            }
        }


    },

    computed: {

    }
}
</script>

<style>
@import "../css/styles.css";
</style>