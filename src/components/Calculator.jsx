import * as React from "react";
import styled from "styled-components";

import Panel from "./Panel";
import Display from "./Display";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import History from "./History";


const Container = styled.div`
  margin: 30px auto;
  text-align: center;
`;

// TODO: History 내에서 수식 표시할 때 사용
const Box = styled.div`
  display: inline-block;
  width: 270px;
  height: 65px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: right;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  cursor: pointer;
  h3 {
    margin: 0px;
  }
`;

const evalFunc = function (string) {
    // eslint-disable-next-line no-new-func
    if (string.includes("√")) {
        string.replace("(", "");
        string.replace(")", "");
        string = string.replace('√', '');
        return Math.sqrt(evalFunc(string));
    }

    string = string.replace(/÷/gi, "/");
    string = string.replace(/×/gi, "*");
    return new Function("return (" + string + ")")();
};

var i = 100;
var history;
class Calculator extends React.Component {
    // TODO: history 추가
    state = {
        displayValue: "",
        history: history = []
    };

    ClickButton = e => {
        console.log(e.target);
        this.setState({
            displayValue: e.target.getAttribute('display'),
        })
    }

    onClickButton = key => {
        let { displayValue = "" } = this.state;
        displayValue = "" + displayValue;
        const lastChar = displayValue.substr(displayValue.length - 1);
        const operatorKeys = ["÷", "×", "-", "+", ".", "√"];
        const proc = {
            AC: () => {
                this.setState({ displayValue: "" });
            },
            BS: () => {
                if (displayValue.length > 0) {
                    displayValue = displayValue.substr(0, displayValue.length - 1);
                }
                this.setState({ displayValue });
            },
            // TODO: 제곱근 구현
            "√": () => {
                if (lastChar !== "" && !operatorKeys.includes(lastChar)) {//루트 들어오면 디스플레이에 추가
                    history[i] = "√(" + displayValue+")";//현재 displayValue 배열에 저장
                    this.setState({ displayValue: "√(" + displayValue +")" });//맨앞에 배치
                }

                //사칙연산과 함께 들어올 경우
                if (lastChar !== "" && (displayValue.includes("+") || displayValue.includes("-") || displayValue.includes("×") || displayValue.includes("÷"))) {
                    //사칙연산 계산한 값에 루트를 씌워서 창에 띄운다
                    if (displayValue.includes("×")) {
                        displayValue = Math.sqrt(evalFunc(displayValue.replace(/×/gi, "*")));
                    }
                    else if (displayValue.includes("÷")) {
                        displayValue = Math.sqrt(evalFunc(displayValue.replace(/÷/gi, "/")));
                    }
                    else {
                        displayValue = Math.sqrt(evalFunc(displayValue.replace("√", "")));
                    }
                    this.setState({ displayValue });
                }
                else {
                    displayValue = Math.sqrt(displayValue.substr(0, displayValue.length));//사칙연산 없으면 그냥 루트만 해준다.
                    this.setState({ displayValue });
                }

                i--;//전역변수 i 값 감소
                this.setState({ displayValue });
            },
            // TODO: 사칙연산 구현
            "÷": () => {
                if (lastChar !== "" && !operatorKeys.includes(lastChar)) {//나눗셈
                    this.setState({ displayValue: displayValue + "÷" });
                }
            },
            "×": () => {
                if (lastChar !== "" && !operatorKeys.includes(lastChar)) {//곱셈
                    this.setState({ displayValue: displayValue + "×" });
                }
            },
            "-": () => {
                if (lastChar !== "" && !operatorKeys.includes(lastChar)) {//빼기
                    this.setState({ displayValue: displayValue + "-" });
                }
            },
            "+": () => {
                // + 연산 참고하여 연산 구현
                if (lastChar !== "" && !operatorKeys.includes(lastChar)) {
                    this.setState({ displayValue: displayValue + "+" });
                }
            },
            "=": () => {
                history[i] = displayValue;//연산 전의 값 배열에 저장

                if (displayValue.includes("√")) {//복원값에 루트 포함일 경우
                    displayValue = displayValue.replace("√", "");
                    displayValue = displayValue.replace("(", "");
                    displayValue = displayValue.replace(")", "");

                    if (lastChar !== "" && (displayValue.includes("+") || displayValue.includes("-") || displayValue.includes("×") || displayValue.includes("÷"))) {
                        //사칙연산 계산한 값에 루트를 씌워서 창에 띄운다
                        if (displayValue.includes("×")) {
                            displayValue = Math.sqrt(evalFunc(displayValue.replace(/×/gi, "*")));
                        }
                        else if (displayValue.includes("÷")) {
                            displayValue = Math.sqrt(evalFunc(displayValue.replace(/÷/gi, "/")));
                        }
                        else {
                            displayValue = Math.sqrt(evalFunc(displayValue.replace("√", "")));
                        }
                        this.setState({ displayValue });
                    }
                    else {
                        displayValue = Math.sqrt(displayValue.substr(0, displayValue.length));//사칙연산 없으면 그냥 루트만 해준다.
                        this.setState({ displayValue });
                    }
                }
                else {//루트 없을 경우
                    if (lastChar !== "" && operatorKeys.includes(lastChar)) {
                        displayValue = displayValue.substr(0, displayValue.length - 1);
                    }
                    else if (lastChar !== "" && displayValue.includes("×")) {//곱하기가 들어올 경우
                        //replace로 대체해서 곱해주기

                        displayValue = evalFunc(displayValue.replace(/×/gi, "*"));
                    }
                    else if (lastChar !== "" && displayValue.includes("÷")) {//나눗셈이 들어올 경우
                        //replace로 대체해서 나눠주기
                        displayValue = evalFunc(displayValue.replace(/÷/gi, "/"));
                    }
                    else if (lastChar !== "") {
                        displayValue = evalFunc(displayValue);
                    }

                }
                i--;//전역변수 i값 감소
                this.setState({ displayValue });
            },

            ".": () => {//소수점
                var cal = (displayValue.includes("+") || displayValue.includes("-") || displayValue.includes("×") || displayValue.includes("÷"));

                //사칙연산 기호 나오기 전
                if (displayValue.includes(".") && !(cal)) {//사칙연산은 없고 디스플레이 벨류에 이미 .이 있다면

                }
                else if (lastChar !== "" && !operatorKeys.includes(lastChar) && !(cal)) {
                    this.setState({ displayValue: displayValue + "." });
                }

                //사칙연산 기호 나온 후
                //+ 더하기
                if (lastChar == "." || (displayValue.substring(displayValue.lastIndexOf("+"), displayValue.length).includes("."))) {//3.3+3?

                }
                else if (lastChar !== "" && !operatorKeys.includes(lastChar) && cal) {
                    this.setState({ displayValue: displayValue + "." });
                }
                //- 빼기
                if (lastChar == "." || (displayValue.substring(displayValue.lastIndexOf("-"), displayValue.length).includes("."))) {//3.3+3?

                }
                else if (lastChar !== "" && !operatorKeys.includes(lastChar) && cal) {
                    this.setState({ displayValue: displayValue + "." });
                }
                //* 곱셈
                if (lastChar == "." || (displayValue.substring(displayValue.lastIndexOf("×"), displayValue.length).includes("."))) {//3.3+3?

                }
                else if (lastChar !== "" && !operatorKeys.includes(lastChar) && cal) {
                    this.setState({ displayValue: displayValue + "." });
                }
                // / 나눗셈
                if (lastChar == "." || (displayValue.substring(displayValue.lastIndexOf("÷"), displayValue.length).includes("."))) {//3.3+3?

                }
                else if (lastChar !== "" && !operatorKeys.includes(lastChar) && cal) {
                    this.setState({ displayValue: displayValue + "." });
                }

            },

            "0": () => {
                if (Number(displayValue) !== 0) {
                    displayValue += "0";
                    this.setState({ displayValue });
                }
            }
        };

        if (proc[key]) {
            proc[key]();
        } else {
            // 여긴 숫자
            this.setState({ displayValue: displayValue + key });
        }
    };

    render() {
        return (
            <Container>
                <Panel>
                    <Display displayValue={this.state.displayValue} />
                    <ButtonGroup onClickButton={this.onClickButton}>
                        <Button size={1} color="gray">
                            AC
            </Button>
                        <Button size={1} color="gray">
                            BS
            </Button>
                        <Button size={1} color="gray">
                            √
            </Button>
                        <Button size={1} color="gray">
                            ÷
            </Button>

                        <Button size={1}>7</Button>
                        <Button size={1}>8</Button>
                        <Button size={1}>9</Button>
                        <Button size={1} color="gray">
                            ×
            </Button>

                        <Button size={1}>4</Button>
                        <Button size={1}>5</Button>
                        <Button size={1}>6</Button>
                        <Button size={1} color="gray">
                            -
            </Button>

                        <Button size={1}>1</Button>
                        <Button size={1}>2</Button>
                        <Button size={1}>3</Button>
                        <Button size={1} color="gray">
                            +
            </Button>

                        <Button size={2}>0</Button>
                        <Button size={1}>.</Button>
                        <Button size={1} color="gray">
                            =
            </Button>
                    </ButtonGroup>
                </Panel>
                {/*History*/}
                <History button={this.ClickButton}>
                    {this.state.history.map((result) => {
                        return (
                            <Box display={result}>{(result)}<br/>{" = " + (evalFunc(result))}
                            </Box>
                        )
                    })
                    }
                </History>
            </Container>
        );
    }
}
export default Calculator;