import * as React from "react";
import styled from "styled-components";

import Panel from "./Panel";
import Display from "./Display";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

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

const evalFunc = function(string) {
  // eslint-disable-next-line no-new-func
  return new Function("return (" + string + ")")();
};

class Calculator extends React.Component {
  // TODO: history 추가
  state = {
    displayValue: ""
  };

    onClickButton = key => {

        let { displayValue = "" } = this.state;
        displayValue = "" + displayValue;
        const lastChar = displayValue.substr(displayValue.length - 1);
        const operatorKeys = ["÷", "×", "-", "+"];
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

              this.setState({ displayValue });
            },

            ".": () => {
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
            <Button size={2} color="gray">
              AC
            </Button>
            <Button size={1} color="gray">
              BS
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
        {/* TODO: History componet를 이용해 map 함수와 Box styled div를 이용해 history 표시 */}

      </Container>
    );
  }
}

export default Calculator;
