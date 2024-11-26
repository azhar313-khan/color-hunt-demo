import "./PaletteGrid.css";
const PaletteGrid = ({ palettes }) => {
  const copy = (val) => {
    console.log(val);
  };
  return (
    <>
      <div className="feed global">
        <div className="item hide">
          <div className="palette">
            <div className="place c3">
              <a></a>
              <span onClick={copy(this)}></span>
            </div>
            <div className="place c2">
              <a></a>
              <span onClick={copy(this)}></span>
            </div>
            <div className="place c1">
              <a></a>
              <span onClick={copy(this)}></span>
            </div>
            <div className="place c0">
              <a></a>
              <span onClick={copy(this)}></span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>Like</span>
              </div>
            </div>
            <span className="date">Today</span>
          </div>
        </div>
        <div
          className="item"
          data-index="0"
          data-code="d3f1df85a98f5a6c57525b44"
          style={{ animationDelay: "0ms" }}

>
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(82, 91, 68)" }}
            >
              <a
                href="/palette/d3f1df85a98f5a6c57525b44"
                aria-label="Palette d3f1df85a98f5a6c57525b44"
              ></a>
              <span onClick={copy(this)} data-copy="#525B44">
                #525B44
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(90, 108, 87)" }}
            >
              <a
                href="/palette/d3f1df85a98f5a6c57525b44"
                aria-label="Palette d3f1df85a98f5a6c57525b44"
              ></a>
              <span onClick={copy(this)} data-copy="#5A6C57">
                #5A6C57
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(133, 169, 143)" }}
            >
              <a
                href="/palette/d3f1df85a98f5a6c57525b44"
                aria-label="Palette d3f1df85a98f5a6c57525b44"
              ></a>
              <span onClick={copy(this)} data-copy="#85A98F">
                #85A98F
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(211, 241, 223)" }}
            >
              <a
                href="/palette/d3f1df85a98f5a6c57525b44"
                aria-label="Palette d3f1df85a98f5a6c57525b44"
              ></a>
              <span onClick={copy(this)} data-copy="#D3F1DF">
                #D3F1DF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>77</span>
              </div>
            </div>
            <span className="date">12 hours</span>
          </div>
        </div>
        <div
          className="item"
          data-index="1"
          data-code="640d5fd91656eb5b00ffb200"
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 178, 0)" }}
            >
              <a
                href="/palette/640d5fd91656eb5b00ffb200"
                aria-label="Palette 640d5fd91656eb5b00ffb200"
              ></a>
              <span onClick={copy(this)} data-copy="#FFB200">
                #FFB200
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(235, 91, 0)" }}
            >
              <a
                href="/palette/640d5fd91656eb5b00ffb200"
                aria-label="Palette 640d5fd91656eb5b00ffb200"
              ></a>
              <span onClick={copy(this)} data-copy="#EB5B00">
                #EB5B00
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(217, 22, 86)" }}
            >
              <a
                href="/palette/640d5fd91656eb5b00ffb200"
                aria-label="Palette 640d5fd91656eb5b00ffb200"
              ></a>
              <span onClick={copy(this)} data-copy="#D91656">
                #D91656
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(100, 13, 95)" }}
            >
              <a
                href="/palette/640d5fd91656eb5b00ffb200"
                aria-label="Palette 640d5fd91656eb5b00ffb200"
              ></a>
              <span onClick={copy(this)} data-copy="#640D5F">
                #640D5F
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>130</span>
              </div>
            </div>
            <span className="date">Yesterday</span>
          </div>
        </div>
        <div
          className="item"
          data-index="2"
          data-code="d4ebf81f509a0a3981e38e49"
          style={{ animationDelay: "0ms" }}

>
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(227, 142, 73)" }}
            >
              <a
                href="/palette/d4ebf81f509a0a3981e38e49"
                aria-label="Palette d4ebf81f509a0a3981e38e49"
              ></a>
              <span onClick={copy(this)} data-copy="#E38E49">
                #E38E49
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(10, 57, 129)" }}
            >
              <a
                href="/palette/d4ebf81f509a0a3981e38e49"
                aria-label="Palette d4ebf81f509a0a3981e38e49"
              ></a>
              <span onClick={copy(this)} data-copy="#0A3981">
                #0A3981
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(31, 80, 154)" }}
            >
              <a
                href="/palette/d4ebf81f509a0a3981e38e49"
                aria-label="Palette d4ebf81f509a0a3981e38e49"
              ></a>
              <span onClick={copy(this)} data-copy="#1F509A">
                #1F509A
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(212, 235, 248)" }}
            >
              <a
                href="/palette/d4ebf81f509a0a3981e38e49"
                aria-label="Palette d4ebf81f509a0a3981e38e49"
              ></a>
              <span onClick={copy(this)} data-copy="#D4EBF8">
                #D4EBF8
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>235</span>
              </div>
            </div>
            <span className="date">2 days</span>
          </div>
        </div>
        <div
          className="item"
          data-index="3"
          data-code="e5e3d49abf806a669d1c325b"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(28, 50, 91)" }}
            >
              <a
                href="/palette/e5e3d49abf806a669d1c325b"
                aria-label="Palette e5e3d49abf806a669d1c325b"
              ></a>
              <span onClick={copy(this)} data-copy="#1C325B">
                #1C325B
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(106, 102, 157)" }}
            >
              <a
                href="/palette/e5e3d49abf806a669d1c325b"
                aria-label="Palette e5e3d49abf806a669d1c325b"
              ></a>
              <span onClick={copy(this)} data-copy="#6A669D">
                #6A669D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(154, 191, 128)" }}
            >
              <a
                href="/palette/e5e3d49abf806a669d1c325b"
                aria-label="Palette e5e3d49abf806a669d1c325b"
              ></a>
              <span onClick={copy(this)} data-copy="#9ABF80">
                #9ABF80
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(229, 227, 212)" }}
            >
              <a
                href="/palette/e5e3d49abf806a669d1c325b"
                aria-label="Palette e5e3d49abf806a669d1c325b"
              ></a>
              <span onClick={copy(this)} data-copy="#E5E3D4">
                #E5E3D4
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>301</span>
              </div>
            </div>
            <span className="date">3 days</span>
          </div>
        </div>
        <div
          className="item"
          data-index="4"
          data-code="89a8b2b3c8cfe5e1daf1f0e8"
          style={{ animationDelay: "120ms" }
        }
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(241, 240, 232)" }}
            >
              <a
                href="/palette/89a8b2b3c8cfe5e1daf1f0e8"
                aria-label="Palette 89a8b2b3c8cfe5e1daf1f0e8"
              ></a>
              <span onClick={copy(this)} data-copy="#F1F0E8">
                #F1F0E8
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(229, 225, 218)" }}
            >
              <a
                href="/palette/89a8b2b3c8cfe5e1daf1f0e8"
                aria-label="Palette 89a8b2b3c8cfe5e1daf1f0e8"
              ></a>
              <span onClick={copy(this)} data-copy="#E5E1DA">
                #E5E1DA
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(179, 200, 207)" }}
            >
              <a
                href="/palette/89a8b2b3c8cfe5e1daf1f0e8"
                aria-label="Palette 89a8b2b3c8cfe5e1daf1f0e8"
              ></a>
              <span onclick={copy(this)} data-copy="#B3C8CF">
                #B3C8CF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(137, 168, 178)" }}
            >
              <a
                href="/palette/89a8b2b3c8cfe5e1daf1f0e8"
                aria-label="Palette 89a8b2b3c8cfe5e1daf1f0e8"
              ></a>
              <span onclick={copy(this)} data-copy="#89A8B2">
                #89A8B2
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("89a8b2b3c8cfe5e1daf1f0e8")'
              >
                <div className="icon" icon="like"></div>
                <span>928</span>
              </div>
            </div>
            <span className="date">4 days</span>
          </div>
        </div>
        <div
          className="item"
          data-index="5"
          data-code="deaa79ffe6a9b1c29e659287"
          style={{ animationDelay: "150ms" }
        }
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(101, 146, 135)" }}
            >
              <a
                href="/palette/deaa79ffe6a9b1c29e659287"
                aria-label="Palette deaa79ffe6a9b1c29e659287"
              ></a>
              <span onclick={copy(this)} data-copy="#659287">
                #659287
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(177, 194, 158)" }}
            >
              <a
                href="/palette/deaa79ffe6a9b1c29e659287"
                aria-label="Palette deaa79ffe6a9b1c29e659287"
              ></a>
              <span onclick={copy(this)} data-copy="#B1C29E">
                #B1C29E
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 230, 169)" }}
            >
              <a
                href="/palette/deaa79ffe6a9b1c29e659287"
                aria-label="Palette deaa79ffe6a9b1c29e659287"
              ></a>
              <span onclick={copy(this)} data-copy="#FFE6A9">
                #FFE6A9
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(222, 170, 121)" }}
            >
              <a
                href="/palette/deaa79ffe6a9b1c29e659287"
                aria-label="Palette deaa79ffe6a9b1c29e659287"
              ></a>
              <span onclick={copy(this)} data-copy="#DEAA79">
                #DEAA79
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("deaa79ffe6a9b1c29e659287")'
              >
                <div className="icon" icon="like"></div>
                <span>695</span>
              </div>
            </div>
            <span className="date">5 days</span>
          </div>
        </div>
        <div
          className="item"
          data-index="6"
          data-code="4335a780c4e9fff6e9ff7f3e"
          style={{ animationDelay: "180ms" }
        }
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 127, 62)" }}
            >
              <a
                href="/palette/4335a780c4e9fff6e9ff7f3e"
                aria-label="Palette 4335a780c4e9fff6e9ff7f3e"
              ></a>
              <span onclick={copy(this)} data-copy="#FF7F3E">
                #FF7F3E
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 246, 233)" }}
            >
              <a
                href="/palette/4335a780c4e9fff6e9ff7f3e"
                aria-label="Palette 4335a780c4e9fff6e9ff7f3e"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF6E9">
                #FFF6E9
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(128, 196, 233)" }}
            >
              <a
                href="/palette/4335a780c4e9fff6e9ff7f3e"
                aria-label="Palette 4335a780c4e9fff6e9ff7f3e"
              ></a>
              <span onclick={copy(this)} data-copy="#80C4E9">
                #80C4E9
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(67, 53, 167)" }}
            >
              <a
                href="/palette/4335a780c4e9fff6e9ff7f3e"
                aria-label="Palette 4335a780c4e9fff6e9ff7f3e"
              ></a>
              <span onclick={copy(this)} data-copy="#4335A7">
                #4335A7
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("4335a780c4e9fff6e9ff7f3e")'
              >
                <div className="icon" icon="like"></div>
                <span>516</span>
              </div>
            </div>
            <span className="date">6 days</span>
          </div>
        </div>
        <div
          className="item"
          data-index="7"
          data-code="22177a605ea18ea3a6e6e9af"
          style={{ animationDelay: "90ms" }}
          
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(230, 233, 175)" }}
            >
              <a
                href="/palette/22177a605ea18ea3a6e6e9af"
                aria-label="Palette 22177a605ea18ea3a6e6e9af"
              ></a>
              <span onclick={copy(this)} data-copy="#E6E9AF">
                #E6E9AF
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(142, 163, 166)" }}
            >
              <a
                href="/palette/22177a605ea18ea3a6e6e9af"
                aria-label="Palette 22177a605ea18ea3a6e6e9af"
              ></a>
              <span onclick={copy(this)} data-copy="#8EA3A6">
                #8EA3A6
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(96, 94, 161)" }}
            >
              <a
                href="/palette/22177a605ea18ea3a6e6e9af"
                aria-label="Palette 22177a605ea18ea3a6e6e9af"
              ></a>
              <span onclick={copy(this)} data-copy="#605EA1">
                #605EA1
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(34, 23, 122)" }}
            >
              <a
                href="/palette/22177a605ea18ea3a6e6e9af"
                aria-label="Palette 22177a605ea18ea3a6e6e9af"
              ></a>
              <span onclick={copy(this)} data-copy="#22177A">
                #22177A
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("22177a605ea18ea3a6e6e9af")'
              >
                <div className="icon" icon="like"></div>
                <span>464</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="8"
          data-code="1f452947663be8ecd7eed3b1"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(238, 211, 177)" }}
            >
              <a
                href="/palette/1f452947663be8ecd7eed3b1"
                aria-label="Palette 1f452947663be8ecd7eed3b1"
              ></a>
              <span onclick={copy(this)} data-copy="#EED3B1">
                #EED3B1
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(232, 236, 215)" }}
            >
              <a
                href="/palette/1f452947663be8ecd7eed3b1"
                aria-label="Palette 1f452947663be8ecd7eed3b1"
              ></a>
              <span onclick={copy(this)} data-copy="#E8ECD7">
                #E8ECD7
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(71, 102, 59)" }}
            >
              <a
                href="/palette/1f452947663be8ecd7eed3b1"
                aria-label="Palette 1f452947663be8ecd7eed3b1"
              ></a>
              <span onclick={copy(this)} data-copy="#47663B">
                #47663B
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(31, 69, 41)" }}
            >
              <a
                href="/palette/1f452947663be8ecd7eed3b1"
                aria-label="Palette 1f452947663be8ecd7eed3b1"
              ></a>
              <span onclick={copy(this)} data-copy="#1F4529">
                #1F4529
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("1f452947663be8ecd7eed3b1")'
              >
                <div className="icon" icon="like"></div>
                <span>860</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="9"
          data-code="f6d6d6f6f7c4a1eebd7bd3ea"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(123, 211, 234)" }}
            >
              <a
                href="/palette/f6d6d6f6f7c4a1eebd7bd3ea"
                aria-label="Palette f6d6d6f6f7c4a1eebd7bd3ea"
              ></a>
              <span onclick={copy(this)} data-copy="#7BD3EA">
                #7BD3EA
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(161, 238, 189)" }}
            >
              <a
                href="/palette/f6d6d6f6f7c4a1eebd7bd3ea"
                aria-label="Palette f6d6d6f6f7c4a1eebd7bd3ea"
              ></a>
              <span onclick={copy(this)} data-copy="#A1EEBD">
                #A1EEBD
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(246, 247, 196)" }}
            >
              <a
                href="/palette/f6d6d6f6f7c4a1eebd7bd3ea"
                aria-label="Palette f6d6d6f6f7c4a1eebd7bd3ea"
              ></a>
              <span onclick={copy(this)} data-copy="#F6F7C4">
                #F6F7C4
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(246, 214, 214)" }}
            >
              <a
                href="/palette/f6d6d6f6f7c4a1eebd7bd3ea"
                aria-label="Palette f6d6d6f6f7c4a1eebd7bd3ea"
              ></a>
              <span onclick={copy(this)} data-copy="#F6D6D6">
                #F6D6D6
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("f6d6d6f6f7c4a1eebd7bd3ea")'
              >
                <div className="icon" icon="like"></div>
                <span>878</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="10"
          data-code="ebeaff9694ff3d3bf3ff2929"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 41, 41)" }}
            >
              <a
                href="/palette/ebeaff9694ff3d3bf3ff2929"
                aria-label="Palette ebeaff9694ff3d3bf3ff2929"
              ></a>
              <span onclick={copy(this)} data-copy="#FF2929">
                #FF2929
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(61, 59, 243)" }}
            >
              <a
                href="/palette/ebeaff9694ff3d3bf3ff2929"
                aria-label="Palette ebeaff9694ff3d3bf3ff2929"
              ></a>
              <span onclick={copy(this)} data-copy="#3D3BF3">
                #3D3BF3
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(150, 148, 255)" }}
            >
              <a
                href="/palette/ebeaff9694ff3d3bf3ff2929"
                aria-label="Palette ebeaff9694ff3d3bf3ff2929"
              ></a>
              <span onclick={copy(this)} data-copy="#9694FF">
                #9694FF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(235, 234, 255)" }}
            >
              <a
                href="/palette/ebeaff9694ff3d3bf3ff2929"
                aria-label="Palette ebeaff9694ff3d3bf3ff2929"
              ></a>
              <span onclick={copy(this)} data-copy="#EBEAFF">
                #EBEAFF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("ebeaff9694ff3d3bf3ff2929")'
              >
                <div className="icon" icon="like"></div>
                <span>577</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="11"
          data-code="78b3cec9e6f0fbf8eff96e2a"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(249, 110, 42)" }}
            >
              <a
                href="/palette/78b3cec9e6f0fbf8eff96e2a"
                aria-label="Palette 78b3cec9e6f0fbf8eff96e2a"
              ></a>
              <span onclick={copy(this)} data-copy="#F96E2A">
                #F96E2A
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(251, 248, 239)" }}
            >
              <a
                href="/palette/78b3cec9e6f0fbf8eff96e2a"
                aria-label="Palette 78b3cec9e6f0fbf8eff96e2a"
              ></a>
              <span onclick={copy(this)} data-copy="#FBF8EF">
                #FBF8EF
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(201, 230, 240)" }}
            >
              <a
                href="/palette/78b3cec9e6f0fbf8eff96e2a"
                aria-label="Palette 78b3cec9e6f0fbf8eff96e2a"
              ></a>
              <span onclick={copy(this)} data-copy="#C9E6F0">
                #C9E6F0
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(120, 179, 206)" }}
            >
              <a
                href="/palette/78b3cec9e6f0fbf8eff96e2a"
                aria-label="Palette 78b3cec9e6f0fbf8eff96e2a"
              ></a>
              <span onclick={copy(this)} data-copy="#78B3CE">
                #78B3CE
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("78b3cec9e6f0fbf8eff96e2a")'
              >
                <div className="icon" icon="like"></div>
                <span>978</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="12"
          data-code="aa5486fc8f54fde7bbfbf4db"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(251, 244, 219)" }}
            >
              <a
                href="/palette/aa5486fc8f54fde7bbfbf4db"
                aria-label="Palette aa5486fc8f54fde7bbfbf4db"
              ></a>
              <span onclick={copy(this)} data-copy="#FBF4DB">
                #FBF4DB
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(253, 231, 187)" }}
            >
              <a
                href="/palette/aa5486fc8f54fde7bbfbf4db"
                aria-label="Palette aa5486fc8f54fde7bbfbf4db"
              ></a>
              <span onclick={copy(this)} data-copy="#FDE7BB">
                #FDE7BB
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(252, 143, 84)" }}
            >
              <a
                href="/palette/aa5486fc8f54fde7bbfbf4db"
                aria-label="Palette aa5486fc8f54fde7bbfbf4db"
              ></a>
              <span onclick={copy(this)} data-copy="#FC8F54">
                #FC8F54
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(170, 84, 134)" }}
            >
              <a
                href="/palette/aa5486fc8f54fde7bbfbf4db"
                aria-label="Palette aa5486fc8f54fde7bbfbf4db"
              ></a>
              <span onclick={copy(this)} data-copy="#AA5486">
                #AA5486
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("aa5486fc8f54fde7bbfbf4db")'
              >
                <div className="icon" icon="like"></div>
                <span>606</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="13"
          data-code="dce4c9f5f5dcb6a28ee07b39"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(224, 123, 57)" }}
            >
              <a
                href="/palette/dce4c9f5f5dcb6a28ee07b39"
                aria-label="Palette dce4c9f5f5dcb6a28ee07b39"
              ></a>
              <span onclick={copy(this)} data-copy="#E07B39">
                #E07B39
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(182, 162, 142)" }}
            >
              <a
                href="/palette/dce4c9f5f5dcb6a28ee07b39"
                aria-label="Palette dce4c9f5f5dcb6a28ee07b39"
              ></a>
              <span onclick={copy(this)} data-copy="#B6A28E">
                #B6A28E
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(245, 245, 220)" }}
            >
              <a
                href="/palette/dce4c9f5f5dcb6a28ee07b39"
                aria-label="Palette dce4c9f5f5dcb6a28ee07b39"
              ></a>
              <span onclick={copy(this)} data-copy="#F5F5DC">
                #F5F5DC
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(220, 228, 201)" }}
            >
              <a
                href="/palette/dce4c9f5f5dcb6a28ee07b39"
                aria-label="Palette dce4c9f5f5dcb6a28ee07b39"
              ></a>
              <span onclick={copy(this)} data-copy="#DCE4C9">
                #DCE4C9
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("dce4c9f5f5dcb6a28ee07b39")'
              >
                <div className="icon" icon="like"></div>
                <span>717</span>
              </div>
            </div>
            <span className="date">1 week</span>
          </div>
        </div>
        <div
          className="item"
          data-index="14"
          data-code="432e544b4376ae445ae8bcb9"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(232, 188, 185)" }}
            >
              <a
                href="/palette/432e544b4376ae445ae8bcb9"
                aria-label="Palette 432e544b4376ae445ae8bcb9"
              ></a>
              <span onclick={copy(this)} data-copy="#E8BCB9">
                #E8BCB9
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(174, 68, 90)" }}
            >
              <a
                href="/palette/432e544b4376ae445ae8bcb9"
                aria-label="Palette 432e544b4376ae445ae8bcb9"
              ></a>
              <span onclick={copy(this)} data-copy="#AE445A">
                #AE445A
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(75, 67, 118)" }}
            >
              <a
                href="/palette/432e544b4376ae445ae8bcb9"
                aria-label="Palette 432e544b4376ae445ae8bcb9"
              ></a>
              <span onclick={copy(this)} data-copy="#4B4376">
                #4B4376
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(67, 46, 84)" }}
            >
              <a
                href="/palette/432e544b4376ae445ae8bcb9"
                aria-label="Palette 432e544b4376ae445ae8bcb9"
              ></a>
              <span onclick={copy(this)} data-copy="#432E54">
                #432E54
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("432e544b4376ae445ae8bcb9")'
              >
                <div className="icon" icon="like"></div>
                <span>1,138</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="15"
          data-code="fff7d18b5dff6a42c2563a9c"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(86, 58, 156)" }}
            >
              <a
                href="/palette/fff7d18b5dff6a42c2563a9c"
                aria-label="Palette fff7d18b5dff6a42c2563a9c"
              ></a>
              <span onclick={copy(this)} data-copy="#563A9C">
                #563A9C
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(106, 66, 194)" }}
            >
              <a
                href="/palette/fff7d18b5dff6a42c2563a9c"
                aria-label="Palette fff7d18b5dff6a42c2563a9c"
              ></a>
              <span onclick={copy(this)} data-copy="#6A42C2">
                #6A42C2
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(139, 93, 255)" }}
            >
              <a
                href="/palette/fff7d18b5dff6a42c2563a9c"
                aria-label="Palette fff7d18b5dff6a42c2563a9c"
              ></a>
              <span onclick={copy(this)} data-copy="#8B5DFF">
                #8B5DFF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 247, 209)" }}
            >
              <a
                href="/palette/fff7d18b5dff6a42c2563a9c"
                aria-label="Palette fff7d18b5dff6a42c2563a9c"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF7D1">
                #FFF7D1
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("fff7d18b5dff6a42c2563a9c")'
              >
                <div className="icon" icon="like"></div>
                <span>754</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="16"
          data-code="c2ffc79edf9c62825d526e48"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(82, 110, 72)" }}
            >
              <a
                href="/palette/c2ffc79edf9c62825d526e48"
                aria-label="Palette c2ffc79edf9c62825d526e48"
              ></a>
              <span onclick={copy(this)} data-copy="#526E48">
                #526E48
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(98, 130, 93)" }}
            >
              <a
                href="/palette/c2ffc79edf9c62825d526e48"
                aria-label="Palette c2ffc79edf9c62825d526e48"
              ></a>
              <span onclick={copy(this)} data-copy="#62825D">
                #62825D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(158, 223, 156)" }}
            >
              <a
                href="/palette/c2ffc79edf9c62825d526e48"
                aria-label="Palette c2ffc79edf9c62825d526e48"
              ></a>
              <span onclick={copy(this)} data-copy="#9EDF9C">
                #9EDF9C
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(194, 255, 199)" }}
            >
              <a
                href="/palette/c2ffc79edf9c62825d526e48"
                aria-label="Palette c2ffc79edf9c62825d526e48"
              ></a>
              <span onclick={copy(this)} data-copy="#C2FFC7">
                #C2FFC7
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("c2ffc79edf9c62825d526e48")'
              >
                <div className="icon" icon="like"></div>
                <span>1,260</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="17"
          data-code="faf6e3d8dbbdb59f782a3663"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(42, 54, 99)" }}
            >
              <a
                href="/palette/faf6e3d8dbbdb59f782a3663"
                aria-label="Palette faf6e3d8dbbdb59f782a3663"
              ></a>
              <span onclick={copy(this)} data-copy="#2A3663">
                #2A3663
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(181, 159, 120)" }}
            >
              <a
                href="/palette/faf6e3d8dbbdb59f782a3663"
                aria-label="Palette faf6e3d8dbbdb59f782a3663"
              ></a>
              <span onclick={copy(this)} data-copy="#B59F78">
                #B59F78
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(216, 219, 189)" }}
            >
              <a
                href="/palette/faf6e3d8dbbdb59f782a3663"
                aria-label="Palette faf6e3d8dbbdb59f782a3663"
              ></a>
              <span onclick={copy(this)} data-copy="#D8DBBD">
                #D8DBBD
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(250, 246, 227)" }}
            >
              <a
                href="/palette/faf6e3d8dbbdb59f782a3663"
                aria-label="Palette faf6e3d8dbbdb59f782a3663"
              ></a>
              <span onclick={copy(this)} data-copy="#FAF6E3">
                #FAF6E3
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("faf6e3d8dbbdb59f782a3663")'
              >
                <div className="icon" icon="like"></div>
                <span>1,417</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="18"
          data-code="ff80004c1f7a219b9deeeeee"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(238, 238, 238)" }}
            >
              <a
                href="/palette/ff80004c1f7a219b9deeeeee"
                aria-label="Palette ff80004c1f7a219b9deeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#EEEEEE">
                #EEEEEE
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(33, 155, 157)" }}
            >
              <a
                href="/palette/ff80004c1f7a219b9deeeeee"
                aria-label="Palette ff80004c1f7a219b9deeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#219B9D">
                #219B9D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(76, 31, 122)" }}
            >
              <a
                href="/palette/ff80004c1f7a219b9deeeeee"
                aria-label="Palette ff80004c1f7a219b9deeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#4C1F7A">
                #4C1F7A
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 128, 0)" }}
            >
              <a
                href="/palette/ff80004c1f7a219b9deeeeee"
                aria-label="Palette ff80004c1f7a219b9deeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#FF8000">
                #FF8000
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("ff80004c1f7a219b9deeeeee")'
              >
                <div className="icon" icon="like"></div>
                <span>750</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="19"
          data-code="fef3e2fab12ffa812ffa4032"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(250, 64, 50)" }}
            >
              <a
                href="/palette/fef3e2fab12ffa812ffa4032"
                aria-label="Palette fef3e2fab12ffa812ffa4032"
              ></a>
              <span onclick={copy(this)} data-copy="#FA4032">
                #FA4032
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(250, 129, 47)" }}
            >
              <a
                href="/palette/fef3e2fab12ffa812ffa4032"
                aria-label="Palette fef3e2fab12ffa812ffa4032"
              ></a>
              <span onclick={copy(this)} data-copy="#FA812F">
                #FA812F
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(250, 177, 47)" }}
            >
              <a
                href="/palette/fef3e2fab12ffa812ffa4032"
                aria-label="Palette fef3e2fab12ffa812ffa4032"
              ></a>
              <span onclick={copy(this)} data-copy="#FAB12F">
                #FAB12F
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(254, 243, 226)" }}
            >
              <a
                href="/palette/fef3e2fab12ffa812ffa4032"
                aria-label="Palette fef3e2fab12ffa812ffa4032"
              ></a>
              <span onclick={copy(this)} data-copy="#FEF3E2">
                #FEF3E2
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("fef3e2fab12ffa812ffa4032")'
              >
                <div className="icon" icon="like"></div>
                <span>1,562</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="20"
          data-code="a6aebfc5d3e8d0e8c5fff8de"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 248, 222)" }}
            >
              <a
                href="/palette/a6aebfc5d3e8d0e8c5fff8de"
                aria-label="Palette a6aebfc5d3e8d0e8c5fff8de"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF8DE">
                #FFF8DE
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(208, 232, 197)" }}
            >
              <a
                href="/palette/a6aebfc5d3e8d0e8c5fff8de"
                aria-label="Palette a6aebfc5d3e8d0e8c5fff8de"
              ></a>
              <span onclick={copy(this)} data-copy="#D0E8C5">
                #D0E8C5
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(197, 211, 232)" }}
            >
              <a
                href="/palette/a6aebfc5d3e8d0e8c5fff8de"
                aria-label="Palette a6aebfc5d3e8d0e8c5fff8de"
              ></a>
              <span onclick={copy(this)} data-copy="#C5D3E8">
                #C5D3E8
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(166, 174, 191)" }}
            >
              <a
                href="/palette/a6aebfc5d3e8d0e8c5fff8de"
                aria-label="Palette a6aebfc5d3e8d0e8c5fff8de"
              ></a>
              <span onclick={copy(this)} data-copy="#A6AEBF">
                #A6AEBF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("a6aebfc5d3e8d0e8c5fff8de")'
              >
                <div className="icon" icon="like"></div>
                <span>1,995</span>
              </div>
            </div>
            <span className="date">2 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="21"
          data-code="3c552dca7373d7b26deee2b5"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(238, 226, 181)" }}
            >
              <a
                href="/palette/3c552dca7373d7b26deee2b5"
                aria-label="Palette 3c552dca7373d7b26deee2b5"
              ></a>
              <span onclick={copy(this)} data-copy="#EEE2B5">
                #EEE2B5
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(215, 178, 109)" }}
            >
              <a
                href="/palette/3c552dca7373d7b26deee2b5"
                aria-label="Palette 3c552dca7373d7b26deee2b5"
              ></a>
              <span onclick={copy(this)} data-copy="#D7B26D">
                #D7B26D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(202, 115, 115)" }}
            >
              <a
                href="/palette/3c552dca7373d7b26deee2b5"
                aria-label="Palette 3c552dca7373d7b26deee2b5"
              ></a>
              <span onclick={copy(this)} data-copy="#CA7373">
                #CA7373
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(60, 85, 45)" }}
            >
              <a
                href="/palette/3c552dca7373d7b26deee2b5"
                aria-label="Palette 3c552dca7373d7b26deee2b5"
              ></a>
              <span onclick={copy(this)} data-copy="#3C552D">
                #3C552D
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("3c552dca7373d7b26deee2b5")'
              >
                <div className="icon" icon="like"></div>
                <span>996</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="22"
          data-code="1a1a1d3b1c326a1e55a64d79"
          style={{ animationDelay: "90ms" }}
          

          >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(166, 77, 121)" }}
            >
              <a
                href="/palette/1a1a1d3b1c326a1e55a64d79"
                aria-label="Palette 1a1a1d3b1c326a1e55a64d79"
              ></a>
              <span onclick={copy(this)} data-copy="#A64D79">
                #A64D79
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(106, 30, 85)" }}
            >
              <a
                href="/palette/1a1a1d3b1c326a1e55a64d79"
                aria-label="Palette 1a1a1d3b1c326a1e55a64d79"
              ></a>
              <span onclick={copy(this)} data-copy="#6A1E55">
                #6A1E55
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(59, 28, 50)" }}
            >
              <a
                href="/palette/1a1a1d3b1c326a1e55a64d79"
                aria-label="Palette 1a1a1d3b1c326a1e55a64d79"
              ></a>
              <span onclick={copy(this)} data-copy="#3B1C32">
                #3B1C32
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(26, 26, 29)" }}
            >
              <a
                href="/palette/1a1a1d3b1c326a1e55a64d79"
                aria-label="Palette 1a1a1d3b1c326a1e55a64d79"
              ></a>
              <span onclick={copy(this)} data-copy="#1A1A1D">
                #1A1A1D
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("1a1a1d3b1c326a1e55a64d79")'
                status="on"
              >
                <div className="icon" icon="like"></div>
                <span>2,458</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="23"
          data-code="cb9df0f0c1e1fddbbbfff9bf"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 249, 191)" }}
            >
              <a
                href="/palette/cb9df0f0c1e1fddbbbfff9bf"
                aria-label="Palette cb9df0f0c1e1fddbbbfff9bf"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF9BF">
                #FFF9BF
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(253, 219, 187)" }}
            >
              <a
                href="/palette/cb9df0f0c1e1fddbbbfff9bf"
                aria-label="Palette cb9df0f0c1e1fddbbbfff9bf"
              ></a>
              <span onclick={copy(this)} data-copy="#FDDBBB">
                #FDDBBB
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(240, 193, 225)" }}
            >
              <a
                href="/palette/cb9df0f0c1e1fddbbbfff9bf"
                aria-label="Palette cb9df0f0c1e1fddbbbfff9bf"
              ></a>
              <span onclick={copy(this)} data-copy="#F0C1E1">
                #F0C1E1
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(203, 157, 240)" }}
            >
              <a
                href="/palette/cb9df0f0c1e1fddbbbfff9bf"
                aria-label="Palette cb9df0f0c1e1fddbbbfff9bf"
              ></a>
              <span onclick={copy(this)} data-copy="#CB9DF0">
                #CB9DF0
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("cb9df0f0c1e1fddbbbfff9bf")'
              >
                <div className="icon" icon="like"></div>
                <span>2,158</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="24"
          data-code="3d5300abba7cffe31af09319"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(240, 147, 25)" }}
            >
              <a
                href="/palette/3d5300abba7cffe31af09319"
                aria-label="Palette 3d5300abba7cffe31af09319"
              ></a>
              <span onclick={copy(this)} data-copy="#F09319">
                #F09319
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 227, 26)" }}
            >
              <a
                href="/palette/3d5300abba7cffe31af09319"
                aria-label="Palette 3d5300abba7cffe31af09319"
              ></a>
              <span onclick={copy(this)} data-copy="#FFE31A">
                #FFE31A
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(171, 186, 124)" }}
            >
              <a
                href="/palette/3d5300abba7cffe31af09319"
                aria-label="Palette 3d5300abba7cffe31af09319"
              ></a>
              <span onclick={copy(this)} data-copy="#ABBA7C">
                #ABBA7C
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(61, 83, 0)" }}
            >
              <a
                href="/palette/3d5300abba7cffe31af09319"
                aria-label="Palette 3d5300abba7cffe31af09319"
              ></a>
              <span onclick={copy(this)} data-copy="#3D5300">
                #3D5300
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("3d5300abba7cffe31af09319")'
              >
                <div className="icon" icon="like"></div>
                <span>959</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="25"
          data-code="000b58003161006a67fff4b7"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 244, 183)" }}
            >
              <a
                href="/palette/000b58003161006a67fff4b7"
                aria-label="Palette 000b58003161006a67fff4b7"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF4B7">
                #FFF4B7
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(0, 106, 103)" }}
            >
              <a
                href="/palette/000b58003161006a67fff4b7"
                aria-label="Palette 000b58003161006a67fff4b7"
              ></a>
              <span onclick={copy(this)} data-copy="#006A67">
                #006A67
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(0, 49, 97)" }}
            >
              <a
                href="/palette/000b58003161006a67fff4b7"
                aria-label="Palette 000b58003161006a67fff4b7"
              ></a>
              <span onclick={copy(this)} data-copy="#003161">
                #003161
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(0, 11, 88)" }}
            >
              <a
                href="/palette/000b58003161006a67fff4b7"
                aria-label="Palette 000b58003161006a67fff4b7"
              ></a>
              <span onclick={copy(this)} data-copy="#000B58">
                #000B58
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("000b58003161006a67fff4b7")'
              >
                <div className="icon" icon="like"></div>
                <span>1,917</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="26"
          data-code="fcf596fbd288ff9c73ff4545"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 69, 69)" }}
            >
              <a
                href="/palette/fcf596fbd288ff9c73ff4545"
                aria-label="Palette fcf596fbd288ff9c73ff4545"
              ></a>
              <span onclick={copy(this)} data-copy="#FF4545">
                #FF4545
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 156, 115)" }}
            >
              <a
                href="/palette/fcf596fbd288ff9c73ff4545"
                aria-label="Palette fcf596fbd288ff9c73ff4545"
              ></a>
              <span onclick={copy(this)} data-copy="#FF9C73">
                #FF9C73
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(251, 210, 136)" }}
            >
              <a
                href="/palette/fcf596fbd288ff9c73ff4545"
                aria-label="Palette fcf596fbd288ff9c73ff4545"
              ></a>
              <span onclick={copy(this)} data-copy="#FBD288">
                #FBD288
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(252, 245, 150)" }}
            >
              <a
                href="/palette/fcf596fbd288ff9c73ff4545"
                aria-label="Palette fcf596fbd288ff9c73ff4545"
              ></a>
              <span onclick={copy(this)} data-copy="#FCF596">
                #FCF596
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("fcf596fbd288ff9c73ff4545")'
              >
                <div className="icon" icon="like"></div>
                <span>1,387</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="27"
          data-code="c6e7ffd4f6fffbfbfbffddae"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 221, 174)" }}
            >
              <a
                href="/palette/c6e7ffd4f6fffbfbfbffddae"
                aria-label="Palette c6e7ffd4f6fffbfbfbffddae"
              ></a>
              <span onclick={copy(this)} data-copy="#FFDDAE">
                #FFDDAE
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(251, 251, 251)" }}
            >
              <a
                href="/palette/c6e7ffd4f6fffbfbfbffddae"
                aria-label="Palette c6e7ffd4f6fffbfbfbffddae"
              ></a>
              <span onclick={copy(this)} data-copy="#FBFBFB">
                #FBFBFB
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(212, 246, 255)" }}
            >
              <a
                href="/palette/c6e7ffd4f6fffbfbfbffddae"
                aria-label="Palette c6e7ffd4f6fffbfbfbffddae"
              ></a>
              <span onclick={copy(this)} data-copy="#D4F6FF">
                #D4F6FF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(198, 231, 255)" }}
            >
              <a
                href="/palette/c6e7ffd4f6fffbfbfbffddae"
                aria-label="Palette c6e7ffd4f6fffbfbfbffddae"
              ></a>
              <span onclick={copy(this)} data-copy="#C6E7FF">
                #C6E7FF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("c6e7ffd4f6fffbfbfbffddae")'
              >
                <div className="icon" icon="like"></div>
                <span>2,554</span>
              </div>
            </div>
            <span className="date">3 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="28"
          data-code="7ed4add76c82b030523d0301"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(61, 3, 1)" }}
            >
              <a
                href="/palette/7ed4add76c82b030523d0301"
                aria-label="Palette 7ed4add76c82b030523d0301"
              ></a>
              <span onclick={copy(this)} data-copy="#3D0301">
                #3D0301
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(176, 48, 82)" }}
            >
              <a
                href="/palette/7ed4add76c82b030523d0301"
                aria-label="Palette 7ed4add76c82b030523d0301"
              ></a>
              <span onclick={copy(this)} data-copy="#B03052">
                #B03052
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(215, 108, 130)" }}
            >
              <a
                href="/palette/7ed4add76c82b030523d0301"
                aria-label="Palette 7ed4add76c82b030523d0301"
              ></a>
              <span onclick={copy(this)} data-copy="#D76C82">
                #D76C82
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(126, 212, 173)" }}
            >
              <a
                href="/palette/7ed4add76c82b030523d0301"
                aria-label="Palette 7ed4add76c82b030523d0301"
              ></a>
              <span onclick={copy(this)} data-copy="#7ED4AD">
                #7ED4AD
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("7ed4add76c82b030523d0301")'
              >
                <div className="icon" icon="like"></div>
                <span>1,123</span>
              </div>
            </div>
            <span className="date">4 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="29"
          data-code="bfecffcdc1fffff6e3ffccea"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 204, 234)" }}
            >
              <a
                href="/palette/bfecffcdc1fffff6e3ffccea"
                aria-label="Palette bfecffcdc1fffff6e3ffccea"
              ></a>
              <span onclick={copy(this)} data-copy="#FFCCEA">
                #FFCCEA
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 246, 227)" }}
            >
              <a
                href="/palette/bfecffcdc1fffff6e3ffccea"
                aria-label="Palette bfecffcdc1fffff6e3ffccea"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF6E3">
                #FFF6E3
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(205, 193, 255)" }}
            >
              <a
                href="/palette/bfecffcdc1fffff6e3ffccea"
                aria-label="Palette bfecffcdc1fffff6e3ffccea"
              ></a>
              <span onclick={copy(this)} data-copy="#CDC1FF">
                #CDC1FF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(191, 236, 255)" }}
            >
              <a
                href="/palette/bfecffcdc1fffff6e3ffccea"
                aria-label="Palette bfecffcdc1fffff6e3ffccea"
              ></a>
              <span onclick={copy(this)} data-copy="#BFECFF">
                #BFECFF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("bfecffcdc1fffff6e3ffccea")'
              >
                <div className="icon" icon="like"></div>
                <span>3,431</span>
              </div>
            </div>
            <span className="date">4 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="30"
          data-code="740938af1740cc2b52de7c7d"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(222, 124, 125)" }}
            >
              <a
                href="/palette/740938af1740cc2b52de7c7d"
                aria-label="Palette 740938af1740cc2b52de7c7d"
              ></a>
              <span onclick={copy(this)} data-copy="#DE7C7D">
                #DE7C7D
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(204, 43, 82)" }}
            >
              <a
                href="/palette/740938af1740cc2b52de7c7d"
                aria-label="Palette 740938af1740cc2b52de7c7d"
              ></a>
              <span onclick={copy(this)} data-copy="#CC2B52">
                #CC2B52
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(175, 23, 64)" }}
            >
              <a
                href="/palette/740938af1740cc2b52de7c7d"
                aria-label="Palette 740938af1740cc2b52de7c7d"
              ></a>
              <span onclick={copy(this)} data-copy="#AF1740">
                #AF1740
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(116, 9, 56)" }}
            >
              <a
                href="/palette/740938af1740cc2b52de7c7d"
                aria-label="Palette 740938af1740cc2b52de7c7d"
              ></a>
              <span onclick={copy(this)} data-copy="#740938">
                #740938
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("740938af1740cc2b52de7c7d")'
              >
                <div className="icon" icon="like"></div>
                <span>2,636</span>
              </div>
            </div>
            <span className="date">4 weeks</span>
          </div>
        </div>
        <div
          className="item"
          data-index="31"
          data-code="f3f3e0133e87608bc1cbdceb"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(203, 220, 235)" }}
            >
              <a
                href="/palette/f3f3e0133e87608bc1cbdceb"
                aria-label="Palette f3f3e0133e87608bc1cbdceb"
              ></a>
              <span onclick={copy(this)} data-copy="#CBDCEB">
                #CBDCEB
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(96, 139, 193)" }}
            >
              <a
                href="/palette/f3f3e0133e87608bc1cbdceb"
                aria-label="Palette f3f3e0133e87608bc1cbdceb"
              ></a>
              <span onclick={copy(this)} data-copy="#608BC1">
                #608BC1
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(19, 62, 135)" }}
            >
              <a
                href="/palette/f3f3e0133e87608bc1cbdceb"
                aria-label="Palette f3f3e0133e87608bc1cbdceb"
              ></a>
              <span onclick={copy(this)} data-copy="#133E87">
                #133E87
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(243, 243, 224)" }}
            >
              <a
                href="/palette/f3f3e0133e87608bc1cbdceb"
                aria-label="Palette f3f3e0133e87608bc1cbdceb"
              ></a>
              <span onclick={copy(this)} data-copy="#F3F3E0">
                #F3F3E0
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("f3f3e0133e87608bc1cbdceb")'
              >
                <div className="icon" icon="like"></div>
                <span>4,895</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="32"
          data-code="1a1a1931511e859f3df6fcdf"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(246, 252, 223)" }}
            >
              <a
                href="/palette/1a1a1931511e859f3df6fcdf"
                aria-label="Palette 1a1a1931511e859f3df6fcdf"
              ></a>
              <span onclick={copy(this)} data-copy="#F6FCDF">
                #F6FCDF
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(133, 159, 61)" }}
            >
              <a
                href="/palette/1a1a1931511e859f3df6fcdf"
                aria-label="Palette 1a1a1931511e859f3df6fcdf"
              ></a>
              <span onclick={copy(this)} data-copy="#859F3D">
                #859F3D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(49, 81, 30)" }}
            >
              <a
                href="/palette/1a1a1931511e859f3df6fcdf"
                aria-label="Palette 1a1a1931511e859f3df6fcdf"
              ></a>
              <span onclick={copy(this)} data-copy="#31511E">
                #31511E
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(26, 26, 25)" }}
            >
              <a
                href="/palette/1a1a1931511e859f3df6fcdf"
                aria-label="Palette 1a1a1931511e859f3df6fcdf"
              ></a>
              <span onclick={copy(this)} data-copy="#1A1A19">
                #1A1A19
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("1a1a1931511e859f3df6fcdf")'
              >
                <div className="icon" icon="like"></div>
                <span>2,711</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="33"
          data-code="ffb38effcf9dffb26fde8f5f"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(222, 143, 95)" }}
            >
              <a
                href="/palette/ffb38effcf9dffb26fde8f5f"
                aria-label="Palette ffb38effcf9dffb26fde8f5f"
              ></a>
              <span onclick={copy(this)} data-copy="#DE8F5F">
                #DE8F5F
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 178, 111)" }}
            >
              <a
                href="/palette/ffb38effcf9dffb26fde8f5f"
                aria-label="Palette ffb38effcf9dffb26fde8f5f"
              ></a>
              <span onclick={copy(this)} data-copy="#FFB26F">
                #FFB26F
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 207, 157)" }}
            >
              <a
                href="/palette/ffb38effcf9dffb26fde8f5f"
                aria-label="Palette ffb38effcf9dffb26fde8f5f"
              ></a>
              <span onclick={copy(this)} data-copy="#FFCF9D">
                #FFCF9D
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 179, 142)" }}
            >
              <a
                href="/palette/ffb38effcf9dffb26fde8f5f"
                aria-label="Palette ffb38effcf9dffb26fde8f5f"
              ></a>
              <span onclick={copy(this)} data-copy="#FFB38E">
                #FFB38E
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("ffb38effcf9dffb26fde8f5f")'
              >
                <div className="icon" icon="like"></div>
                <span>2,129</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="34"
          data-code="dff2ebb9e5e87ab2d34a628a"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(74, 98, 138)" }}
            >
              <a
                href="/palette/dff2ebb9e5e87ab2d34a628a"
                aria-label="Palette dff2ebb9e5e87ab2d34a628a"
              ></a>
              <span onclick={copy(this)} data-copy="#4A628A">
                #4A628A
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(122, 178, 211)" }}
            >
              <a
                href="/palette/dff2ebb9e5e87ab2d34a628a"
                aria-label="Palette dff2ebb9e5e87ab2d34a628a"
              ></a>
              <span onclick={copy(this)} data-copy="#7AB2D3">
                #7AB2D3
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(185, 229, 232)" }}
            >
              <a
                href="/palette/dff2ebb9e5e87ab2d34a628a"
                aria-label="Palette dff2ebb9e5e87ab2d34a628a"
              ></a>
              <span onclick={copy(this)} data-copy="#B9E5E8">
                #B9E5E8
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(223, 242, 235)" }}
            >
              <a
                href="/palette/dff2ebb9e5e87ab2d34a628a"
                aria-label="Palette dff2ebb9e5e87ab2d34a628a"
              ></a>
              <span onclick={copy(this)} data-copy="#DFF2EB">
                #DFF2EB
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("dff2ebb9e5e87ab2d34a628a")'
              >
                <div className="icon" icon="like"></div>
                <span>5,282</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="35"
          data-code="3b1e549b7ebdd4bee4eeeeee"
          style={{ animationDelay: "90ms" }}
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(238, 238, 238)" }}
            >
              <a
                href="/palette/3b1e549b7ebdd4bee4eeeeee"
                aria-label="Palette 3b1e549b7ebdd4bee4eeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#EEEEEE">
                #EEEEEE
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(212, 190, 228)" }}
            >
              <a
                href="/palette/3b1e549b7ebdd4bee4eeeeee"
                aria-label="Palette 3b1e549b7ebdd4bee4eeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#D4BEE4">
                #D4BEE4
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(155, 126, 189)" }}
            >
              <a
                href="/palette/3b1e549b7ebdd4bee4eeeeee"
                aria-label="Palette 3b1e549b7ebdd4bee4eeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#9B7EBD">
                #9B7EBD
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(59, 30, 84)" }}
            >
              <a
                href="/palette/3b1e549b7ebdd4bee4eeeeee"
                aria-label="Palette 3b1e549b7ebdd4bee4eeeeee"
              ></a>
              <span onclick={copy(this)} data-copy="#3B1E54">
                #3B1E54
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("3b1e549b7ebdd4bee4eeeeee")'
              >
                <div className="icon" icon="like"></div>
                <span>3,350</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="36"
          data-code="4c4b16898121e6c767f87a53"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(248, 122, 83)" }}
            >
              <a
                href="/palette/4c4b16898121e6c767f87a53"
                aria-label="Palette 4c4b16898121e6c767f87a53"
              ></a>
              <span onclick={copy(this)} data-copy="#F87A53">
                #F87A53
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(230, 199, 103)" }}
            >
              <a
                href="/palette/4c4b16898121e6c767f87a53"
                aria-label="Palette 4c4b16898121e6c767f87a53"
              ></a>
              <span onclick={copy(this)} data-copy="#E6C767">
                #E6C767
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(137, 129, 33)" }}
            >
              <a
                href="/palette/4c4b16898121e6c767f87a53"
                aria-label="Palette 4c4b16898121e6c767f87a53"
              ></a>
              <span onclick={copy(this)} data-copy="#898121">
                #898121
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(76, 75, 22)" }}
            >
              <a
                href="/palette/4c4b16898121e6c767f87a53"
                aria-label="Palette 4c4b16898121e6c767f87a53"
              ></a>
              <span onclick={copy(this)} data-copy="#4C4B16">
                #4C4B16
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("4c4b16898121e6c767f87a53")'
              >
                <div className="icon" icon="like"></div>
                <span>1,368</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="37"
          data-code="37afe14cc9fef5f4b3fffecb"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 254, 203)" }}
            >
              <a
                href="/palette/37afe14cc9fef5f4b3fffecb"
                aria-label="Palette 37afe14cc9fef5f4b3fffecb"
              ></a>
              <span onclick={copy(this)} data-copy="#FFFECB">
                #FFFECB
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(245, 244, 179)" }}
            >
              <a
                href="/palette/37afe14cc9fef5f4b3fffecb"
                aria-label="Palette 37afe14cc9fef5f4b3fffecb"
              ></a>
              <span onclick={copy(this)} data-copy="#F5F4B3">
                #F5F4B3
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(76, 201, 254)" }}
            >
              <a
                href="/palette/37afe14cc9fef5f4b3fffecb"
                aria-label="Palette 37afe14cc9fef5f4b3fffecb"
              ></a>
              <span onclick={copy(this)} data-copy="#4CC9FE">
                #4CC9FE
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(55, 175, 225)" }}
            >
              <a
                href="/palette/37afe14cc9fef5f4b3fffecb"
                aria-label="Palette 37afe14cc9fef5f4b3fffecb"
              ></a>
              <span onclick={copy(this)} data-copy="#37AFE1">
                #37AFE1
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("37afe14cc9fef5f4b3fffecb")'
              >
                <div className="icon" icon="like"></div>
                <span>1,184</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="38"
          data-code="88c273fff1dbd4bdac536493"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(83, 100, 147)" }}
            >
              <a
                href="/palette/88c273fff1dbd4bdac536493"
                aria-label="Palette 88c273fff1dbd4bdac536493"
              ></a>
              <span onclick={copy(this)} data-copy="#536493">
                #536493
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(212, 189, 172)" }}
            >
              <a
                href="/palette/88c273fff1dbd4bdac536493"
                aria-label="Palette 88c273fff1dbd4bdac536493"
              ></a>
              <span onclick={copy(this)} data-copy="#D4BDAC">
                #D4BDAC
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 241, 219)" }}
            >
              <a
                href="/palette/88c273fff1dbd4bdac536493"
                aria-label="Palette 88c273fff1dbd4bdac536493"
              ></a>
              <span onclick={copy(this)} data-copy="#FFF1DB">
                #FFF1DB
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(136, 194, 115)" }}
            >
              <a
                href="/palette/88c273fff1dbd4bdac536493"
                aria-label="Palette 88c273fff1dbd4bdac536493"
              ></a>
              <span onclick={copy(this)} data-copy="#88C273">
                #88C273
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div
                className="button like"
                onclick='like("88c273fff1dbd4bdac536493")'
              >
                <div className="icon" icon="like"></div>
                <span>1,249</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="39"
          data-code="b1d690feec37ffa24cff77b7"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 119, 183)" }}
            >
              <a
                href="/palette/b1d690feec37ffa24cff77b7"
                aria-label="Palette b1d690feec37ffa24cff77b7"
              ></a>
              <span onclick={copy(this)} data-copy="#FF77B7">
                #FF77B7
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 162, 76)" }}
            >
              <a
                href="/palette/b1d690feec37ffa24cff77b7"
                aria-label="Palette b1d690feec37ffa24cff77b7"
              ></a>
              <span onclick={copy(this)} data-copy="#FFA24C">
                #FFA24C
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(254, 236, 55)" }}
            >
              <a
                href="/palette/b1d690feec37ffa24cff77b7"
                aria-label="Palette b1d690feec37ffa24cff77b7"
              ></a>
              <span onclick={copy(this)} data-copy="#FEEC37">
                #FEEC37
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(177, 214, 144)" }}
            >
              <a
                href="/palette/b1d690feec37ffa24cff77b7"
                aria-label="Palette b1d690feec37ffa24cff77b7"
              ></a>
              <span onclick={copy(this)} data-copy="#B1D690">
                #B1D690
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,279</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div className="item banner-in-feed">
          <div className="title">Bookmark Color Hunt</div>
          <p>Press Ctrl/Cmd + D to add Color Hunt to your bookmarks bar!</p>
        </div>
        <div
          className="item"
          data-index="0"
          data-code="c4e1f6feee91ffbd73ff9d3d"
          style={{ animationDelay: "90ms" }}
          
       >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 157, 61)" }}
            >
              <a
                href="/palette/c4e1f6feee91ffbd73ff9d3d"
                aria-label="Palette c4e1f6feee91ffbd73ff9d3d"
              ></a>
              <span onClick={copy(this)} data-copy="#FF9D3D">
                #FF9D3D
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 189, 115)" }}
            >
              <a
                href="/palette/c4e1f6feee91ffbd73ff9d3d"
                aria-label="Palette c4e1f6feee91ffbd73ff9d3d"
              ></a>
              <span onClick={copy(this)} data-copy="#FFBD73">
                #FFBD73
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(254, 238, 145)" }}
            >
              <a
                href="/palette/c4e1f6feee91ffbd73ff9d3d"
                aria-label="Palette c4e1f6feee91ffbd73ff9d3d"
              ></a>
              <span onClick={copy(this)} data-copy="#FEEE91">
                #FEEE91
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(196, 225, 246)" }}
            >
              <a
                href="/palette/c4e1f6feee91ffbd73ff9d3d"
                aria-label="Palette c4e1f6feee91ffbd73ff9d3d"
              ></a>
              <span onClick={copy(this)} data-copy="#C4E1F6">
                #C4E1F6
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,713</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="1"
          data-code="e9eed9cbd2a49a7e6f54473f"
          style={{ animationDelay: "90ms" }}
          
       >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(84, 71, 63)" }}
            >
              <a
                href="/palette/e9eed9cbd2a49a7e6f54473f"
                aria-label="Palette e9eed9cbd2a49a7e6f54473f"
              ></a>
              <span onClick={copy(this)} data-copy="#54473F">
                #54473F
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(154, 126, 111)" }}
            >
              <a
                href="/palette/e9eed9cbd2a49a7e6f54473f"
                aria-label="Palette e9eed9cbd2a49a7e6f54473f"
              ></a>
              <span onClick={copy(this)} data-copy="#9A7E6F">
                #9A7E6F
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(203, 210, 164)" }}
            >
              <a
                href="/palette/e9eed9cbd2a49a7e6f54473f"
                aria-label="Palette e9eed9cbd2a49a7e6f54473f"
              ></a>
              <span onClick={copy(this)} data-copy="#CBD2A4">
                #CBD2A4
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(233, 238, 217)" }}
            >
              <a
                href="/palette/e9eed9cbd2a49a7e6f54473f"
                aria-label="Palette e9eed9cbd2a49a7e6f54473f"
              ></a>
              <span onClick={copy(this)} data-copy="#E9EED9">
                #E9EED9
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,837</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="2"
          data-code="a2d2dff6efbde4c087bc7c7c"
          style={{ animationDelay: "0ms" }}

>
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(188, 124, 124)" }}
            >
              <a
                href="/palette/a2d2dff6efbde4c087bc7c7c"
                aria-label="Palette a2d2dff6efbde4c087bc7c7c"
              ></a>
              <span onClick={copy(this)} data-copy="#BC7C7C">
                #BC7C7C
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(228, 192, 135)" }}
            >
              <a
                href="/palette/a2d2dff6efbde4c087bc7c7c"
                aria-label="Palette a2d2dff6efbde4c087bc7c7c"
              ></a>
              <span onClick={copy(this)} data-copy="#E4C087">
                #E4C087
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(246, 239, 189)" }}
            >
              <a
                href="/palette/a2d2dff6efbde4c087bc7c7c"
                aria-label="Palette a2d2dff6efbde4c087bc7c7c"
              ></a>
              <span onClick={copy(this)} data-copy="#F6EFBD">
                #F6EFBD
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(162, 210, 223)" }}
            >
              <a
                href="/palette/a2d2dff6efbde4c087bc7c7c"
                aria-label="Palette a2d2dff6efbde4c087bc7c7c"
              ></a>
              <span onClick={copy(this)} data-copy="#A2D2DF">
                #A2D2DF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,755</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="3"
          data-code="789dbcffe3e3fef9f2c9e9d2"
          style={{ animationDelay: "90ms" }}
          
       >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(201, 233, 210)" }}
            >
              <a
                href="/palette/789dbcffe3e3fef9f2c9e9d2"
                aria-label="Palette 789dbcffe3e3fef9f2c9e9d2"
              ></a>
              <span onClick={copy(this)} data-copy="#C9E9D2">
                #C9E9D2
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(254, 249, 242)" }}
            >
              <a
                href="/palette/789dbcffe3e3fef9f2c9e9d2"
                aria-label="Palette 789dbcffe3e3fef9f2c9e9d2"
              ></a>
              <span onClick={copy(this)} data-copy="#FEF9F2">
                #FEF9F2
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 227, 227)" }}
            >
              <a
                href="/palette/789dbcffe3e3fef9f2c9e9d2"
                aria-label="Palette 789dbcffe3e3fef9f2c9e9d2"
              ></a>
              <span onClick={copy(this)} data-copy="#FFE3E3">
                #FFE3E3
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(120, 157, 188)" }}
            >
              <a
                href="/palette/789dbcffe3e3fef9f2c9e9d2"
                aria-label="Palette 789dbcffe3e3fef9f2c9e9d2"
              ></a>
              <span onClick={copy(this)} data-copy="#789DBC">
                #789DBC
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,578</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="4"
          data-code="6056788abfa3ffbf61ffe6a5"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 230, 165)" }}
            >
              <a
                href="/palette/6056788abfa3ffbf61ffe6a5"
                aria-label="Palette 6056788abfa3ffbf61ffe6a5"
              ></a>
              <span onClick={copy(this)} data-copy="#FFE6A5">
                #FFE6A5
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 191, 97)" }}
            >
              <a
                href="/palette/6056788abfa3ffbf61ffe6a5"
                aria-label="Palette 6056788abfa3ffbf61ffe6a5"
              ></a>
              <span onClick={copy(this)} data-copy="#FFBF61">
                #FFBF61
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(138, 191, 163)" }}
            >
              <a
                href="/palette/6056788abfa3ffbf61ffe6a5"
                aria-label="Palette 6056788abfa3ffbf61ffe6a5"
              ></a>
              <span onClick={copy(this)} data-copy="#8ABFA3">
                #8ABFA3
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(96, 86, 120)" }}
            >
              <a
                href="/palette/6056788abfa3ffbf61ffe6a5"
                aria-label="Palette 6056788abfa3ffbf61ffe6a5"
              ></a>
              <span onClick={copy(this)} data-copy="#605678">
                #605678
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,209</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="5"
          data-code="e4e0e1d6c0b3ab886d493628"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(73, 54, 40)" }}
            >
              <a
                href="/palette/e4e0e1d6c0b3ab886d493628"
                aria-label="Palette e4e0e1d6c0b3ab886d493628"
              ></a>
              <span onClick={copy(this)} data-copy="#493628">
                #493628
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(171, 136, 109)" }}
            >
              <a
                href="/palette/e4e0e1d6c0b3ab886d493628"
                aria-label="Palette e4e0e1d6c0b3ab886d493628"
              ></a>
              <span onClick={copy(this)} data-copy="#AB886D">
                #AB886D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(214, 192, 179)" }}
            >
              <a
                href="/palette/e4e0e1d6c0b3ab886d493628"
                aria-label="Palette e4e0e1d6c0b3ab886d493628"
              ></a>
              <span onClick={copy(this)} data-copy="#D6C0B3">
                #D6C0B3
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(228, 224, 225)" }}
            >
              <a
                href="/palette/e4e0e1d6c0b3ab886d493628"
                aria-label="Palette e4e0e1d6c0b3ab886d493628"
              ></a>
              <span onClick={copy(this)} data-copy="#E4E0E1">
                #E4E0E1
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,437</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="6"
          data-code="0d92f477cdfff95454c62e2e"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(198, 46, 46)" }}
            >
              <a
                href="/palette/0d92f477cdfff95454c62e2e"
                aria-label="Palette 0d92f477cdfff95454c62e2e"
              ></a>
              <span onClick={copy(this)} data-copy="#C62E2E">
                #C62E2E
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(249, 84, 84)" }}
            >
              <a
                href="/palette/0d92f477cdfff95454c62e2e"
                aria-label="Palette 0d92f477cdfff95454c62e2e"
              ></a>
              <span onClick={copy(this)} data-copy="#F95454">
                #F95454
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(119, 205, 255)" }}
            >
              <a
                href="/palette/0d92f477cdfff95454c62e2e"
                aria-label="Palette 0d92f477cdfff95454c62e2e"
              ></a>
              <span onClick={copy(this)} data-copy="#77CDFF">
                #77CDFF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(13, 146, 244)" }}
            >
              <a
                href="/palette/0d92f477cdfff95454c62e2e"
                aria-label="Palette 0d92f477cdfff95454c62e2e"
              ></a>
              <span onClick={copy(this)} data-copy="#0D92F4">
                #0D92F4
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,723</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="7"
          data-code="091057024caaec8305dbd3d3"
          style={{ animationDelay: "90ms" }}
          
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(219, 211, 211)" }}
            >
              <a
                href="/palette/091057024caaec8305dbd3d3"
                aria-label="Palette 091057024caaec8305dbd3d3"
              ></a>
              <span onClick={copy(this)} data-copy="#DBD3D3">
                #DBD3D3
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(236, 131, 5)" }}
            >
              <a
                href="/palette/091057024caaec8305dbd3d3"
                aria-label="Palette 091057024caaec8305dbd3d3"
              ></a>
              <span onClick={copy(this)} data-copy="#EC8305">
                #EC8305
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(2, 76, 170)" }}
            >
              <a
                href="/palette/091057024caaec8305dbd3d3"
                aria-label="Palette 091057024caaec8305dbd3d3"
              ></a>
              <span onClick={copy(this)} data-copy="#024CAA">
                #024CAA
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(9, 16, 87)" }}
            >
              <a
                href="/palette/091057024caaec8305dbd3d3"
                aria-label="Palette 091057024caaec8305dbd3d3"
              ></a>
              <span onClick={copy(this)} data-copy="#091057">
                #091057
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,481</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="8"
          data-code="00ff9cb6ffa1feffa7ffe700"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 231, 0)" }}
            >
              <a
                href="/palette/00ff9cb6ffa1feffa7ffe700"
                aria-label="Palette 00ff9cb6ffa1feffa7ffe700"
              ></a>
              <span onClick={copy(this)} data-copy="#FFE700">
                #FFE700
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(254, 255, 167)" }}
            >
              <a
                href="/palette/00ff9cb6ffa1feffa7ffe700"
                aria-label="Palette 00ff9cb6ffa1feffa7ffe700"
              ></a>
              <span onClick={copy(this)} data-copy="#FEFFA7">
                #FEFFA7
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(182, 255, 161)" }}
            >
              <a
                href="/palette/00ff9cb6ffa1feffa7ffe700"
                aria-label="Palette 00ff9cb6ffa1feffa7ffe700"
              ></a>
              <span onClick={copy(this)} data-copy="#B6FFA1">
                #B6FFA1
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(0, 255, 156)" }}
            >
              <a
                href="/palette/00ff9cb6ffa1feffa7ffe700"
                aria-label="Palette 00ff9cb6ffa1feffa7ffe700"
              ></a>
              <span onClick={copy(this)} data-copy="#00FF9C">
                #00FF9C
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,090</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="9"
          data-code="f4f6fff3c623eb831710375c"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(16, 55, 92)" }}
            >
              <a
                href="/palette/f4f6fff3c623eb831710375c"
                aria-label="Palette f4f6fff3c623eb831710375c"
              ></a>
              <span onClick={copy(this)} data-copy="#10375C">
                #10375C
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(235, 131, 23)" }}
            >
              <a
                href="/palette/f4f6fff3c623eb831710375c"
                aria-label="Palette f4f6fff3c623eb831710375c"
              ></a>
              <span onClick={copy(this)} data-copy="#EB8317">
                #EB8317
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(243, 198, 35)" }}
            >
              <a
                href="/palette/f4f6fff3c623eb831710375c"
                aria-label="Palette f4f6fff3c623eb831710375c"
              ></a>
              <span onClick={copy(this)} data-copy="#F3C623">
                #F3C623
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(244, 246, 255)" }}
            >
              <a
                href="/palette/f4f6fff3c623eb831710375c"
                aria-label="Palette f4f6fff3c623eb831710375c"
              ></a>
              <span onClick={copy(this)} data-copy="#F4F6FF">
                #F4F6FF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,546</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="10"
          data-code="fff100006bff08c2ffbcf2f6"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(188, 242, 246)" }}
            >
              <a
                href="/palette/fff100006bff08c2ffbcf2f6"
                aria-label="Palette fff100006bff08c2ffbcf2f6"
              ></a>
              <span onClick={copy(this)} data-copy="#BCF2F6">
                #BCF2F6
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(8, 194, 255)" }}
            >
              <a
                href="/palette/fff100006bff08c2ffbcf2f6"
                aria-label="Palette fff100006bff08c2ffbcf2f6"
              ></a>
              <span onClick={copy(this)} data-copy="#08C2FF">
                #08C2FF
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(0, 107, 255)" }}
            >
              <a
                href="/palette/fff100006bff08c2ffbcf2f6"
                aria-label="Palette fff100006bff08c2ffbcf2f6"
              ></a>
              <span onClick={copy(this)} data-copy="#006BFF">
                #006BFF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 241, 0)" }}
            >
              <a
                href="/palette/fff100006bff08c2ffbcf2f6"
                aria-label="Palette fff100006bff08c2ffbcf2f6"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF100">
                #FFF100
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,445</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="11"
          data-code="243642387478629584e2f1e7"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(226, 241, 231)" }}
            >
              <a
                href="/palette/243642387478629584e2f1e7"
                aria-label="Palette 243642387478629584e2f1e7"
              ></a>
              <span onClick={copy(this)} data-copy="#E2F1E7">
                #E2F1E7
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(98, 149, 132)" }}
            >
              <a
                href="/palette/243642387478629584e2f1e7"
                aria-label="Palette 243642387478629584e2f1e7"
              ></a>
              <span onClick={copy(this)} data-copy="#629584">
                #629584
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(56, 116, 120)" }}
            >
              <a
                href="/palette/243642387478629584e2f1e7"
                aria-label="Palette 243642387478629584e2f1e7"
              ></a>
              <span onClick={copy(this)} data-copy="#387478">
                #387478
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(36, 54, 66)" }}
            >
              <a
                href="/palette/243642387478629584e2f1e7"
                aria-label="Palette 243642387478629584e2f1e7"
              ></a>
              <span onClick={copy(this)} data-copy="#243642">
                #243642
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,809</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="12"
          data-code="257180f2e5bffd8b51cb6040"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(203, 96, 64)" }}
            >
              <a
                href="/palette/257180f2e5bffd8b51cb6040"
                aria-label="Palette 257180f2e5bffd8b51cb6040"
              ></a>
              <span onClick={copy(this)} data-copy="#CB6040">
                #CB6040
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(253, 139, 81)" }}
            >
              <a
                href="/palette/257180f2e5bffd8b51cb6040"
                aria-label="Palette 257180f2e5bffd8b51cb6040"
              ></a>
              <span onClick={copy(this)} data-copy="#FD8B51">
                #FD8B51
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(242, 229, 191)" }}
            >
              <a
                href="/palette/257180f2e5bffd8b51cb6040"
                aria-label="Palette 257180f2e5bffd8b51cb6040"
              ></a>
              <span onClick={copy(this)} data-copy="#F2E5BF">
                #F2E5BF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(37, 113, 128)" }}
            >
              <a
                href="/palette/257180f2e5bffd8b51cb6040"
                aria-label="Palette 257180f2e5bffd8b51cb6040"
              ></a>
              <span onClick={copy(this)} data-copy="#257180">
                #257180
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,842</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="13"
          data-code="a5b68decdfccfcfaeeda8359"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(218, 131, 89)" }}
            >
              <a
                href="/palette/a5b68decdfccfcfaeeda8359"
                aria-label="Palette a5b68decdfccfcfaeeda8359"
              ></a>
              <span onClick={copy(this)} data-copy="#DA8359">
                #DA8359
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(252, 250, 238)" }}
            >
              <a
                href="/palette/a5b68decdfccfcfaeeda8359"
                aria-label="Palette a5b68decdfccfcfaeeda8359"
              ></a>
              <span onClick={copy(this)} data-copy="#FCFAEE">
                #FCFAEE
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(236, 223, 204)" }}
            >
              <a
                href="/palette/a5b68decdfccfcfaeeda8359"
                aria-label="Palette a5b68decdfccfcfaeeda8359"
              ></a>
              <span onClick={copy(this)} data-copy="#ECDFCC">
                #ECDFCC
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(165, 182, 141)" }}
            >
              <a
                href="/palette/a5b68decdfccfcfaeeda8359"
                aria-label="Palette a5b68decdfccfcfaeeda8359"
              ></a>
              <span onClick={copy(this)} data-copy="#A5B68D">
                #A5B68D
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,221</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="14"
          data-code="798645fefae0f2eed7626f47"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(98, 111, 71)" }}
            >
              <a
                href="/palette/798645fefae0f2eed7626f47"
                aria-label="Palette 798645fefae0f2eed7626f47"
              ></a>
              <span onClick={copy(this)} data-copy="#626F47">
                #626F47
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(242, 238, 215)" }}
            >
              <a
                href="/palette/798645fefae0f2eed7626f47"
                aria-label="Palette 798645fefae0f2eed7626f47"
              ></a>
              <span onClick={copy(this)} data-copy="#F2EED7">
                #F2EED7
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(254, 250, 224)" }}
            >
              <a
                href="/palette/798645fefae0f2eed7626f47"
                aria-label="Palette 798645fefae0f2eed7626f47"
              ></a>
              <span onClick={copy(this)} data-copy="#FEFAE0">
                #FEFAE0
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(121, 134, 69)" }}
            >
              <a
                href="/palette/798645fefae0f2eed7626f47"
                aria-label="Palette 798645fefae0f2eed7626f47"
              ></a>
              <span onClick={copy(this)} data-copy="#798645">
                #798645
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,245</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="15"
          data-code="72bf78a0d683d3ee98feff9f"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(254, 255, 159)" }}
            >
              <a
                href="/palette/72bf78a0d683d3ee98feff9f"
                aria-label="Palette 72bf78a0d683d3ee98feff9f"
              ></a>
              <span onClick={copy(this)} data-copy="#FEFF9F">
                #FEFF9F
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(211, 238, 152)" }}
            >
              <a
                href="/palette/72bf78a0d683d3ee98feff9f"
                aria-label="Palette 72bf78a0d683d3ee98feff9f"
              ></a>
              <span onClick={copy(this)} data-copy="#D3EE98">
                #D3EE98
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(160, 214, 131)" }}
            >
              <a
                href="/palette/72bf78a0d683d3ee98feff9f"
                aria-label="Palette 72bf78a0d683d3ee98feff9f"
              ></a>
              <span onClick={copy(this)} data-copy="#A0D683">
                #A0D683
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(114, 191, 120)" }}
            >
              <a
                href="/palette/72bf78a0d683d3ee98feff9f"
                aria-label="Palette 72bf78a0d683d3ee98feff9f"
              ></a>
              <span onClick={copy(this)} data-copy="#72BF78">
                #72BF78
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,363</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="16"
          data-code="fff7d1ffecc8ffd09bffb0b0"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 176, 176)" }}
            >
              <a
                href="/palette/fff7d1ffecc8ffd09bffb0b0"
                aria-label="Palette fff7d1ffecc8ffd09bffb0b0"
              ></a>
              <span onClick={copy(this)} data-copy="#FFB0B0">
                #FFB0B0
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 208, 155)" }}
            >
              <a
                href="/palette/fff7d1ffecc8ffd09bffb0b0"
                aria-label="Palette fff7d1ffecc8ffd09bffb0b0"
              ></a>
              <span onClick={copy(this)} data-copy="#FFD09B">
                #FFD09B
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 236, 200)" }}
            >
              <a
                href="/palette/fff7d1ffecc8ffd09bffb0b0"
                aria-label="Palette fff7d1ffecc8ffd09bffb0b0"
              ></a>
              <span onClick={copy(this)} data-copy="#FFECC8">
                #FFECC8
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 247, 209)" }}
            >
              <a
                href="/palette/fff7d1ffecc8ffd09bffb0b0"
                aria-label="Palette fff7d1ffecc8ffd09bffb0b0"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF7D1">
                #FFF7D1
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,268</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="17"
          data-code="a66e38ffad60ffeead96ceb4"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(150, 206, 180)" }}
            >
              <a
                href="/palette/a66e38ffad60ffeead96ceb4"
                aria-label="Palette a66e38ffad60ffeead96ceb4"
              ></a>
              <span onClick={copy(this)} data-copy="#96CEB4">
                #96CEB4
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 238, 173)" }}
            >
              <a
                href="/palette/a66e38ffad60ffeead96ceb4"
                aria-label="Palette a66e38ffad60ffeead96ceb4"
              ></a>
              <span onClick={copy(this)} data-copy="#FFEEAD">
                #FFEEAD
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 173, 96)" }}
            >
              <a
                href="/palette/a66e38ffad60ffeead96ceb4"
                aria-label="Palette a66e38ffad60ffeead96ceb4"
              ></a>
              <span onClick={copy(this)} data-copy="#FFAD60">
                #FFAD60
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(166, 110, 56)" }}
            >
              <a
                href="/palette/a66e38ffad60ffeead96ceb4"
                aria-label="Palette a66e38ffad60ffeead96ceb4"
              ></a>
              <span onClick={copy(this)} data-copy="#A66E38">
                #A66E38
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,828</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="18"
          data-code="ff65001e3e620b192c000000"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(0, 0, 0)" }}
            >
              <a
                href="/palette/ff65001e3e620b192c000000"
                aria-label="Palette ff65001e3e620b192c000000"
              ></a>
              <span onClick={copy(this)} data-copy="#000000">
                #000000
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(11, 25, 44)" }}
            >
              <a
                href="/palette/ff65001e3e620b192c000000"
                aria-label="Palette ff65001e3e620b192c000000"
              ></a>
              <span onClick={copy(this)} data-copy="#0B192C">
                #0B192C
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(30, 62, 98)" }}
            >
              <a
                href="/palette/ff65001e3e620b192c000000"
                aria-label="Palette ff65001e3e620b192c000000"
              ></a>
              <span onClick={copy(this)} data-copy="#1E3E62">
                #1E3E62
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 101, 0)" }}
            >
              <a
                href="/palette/ff65001e3e620b192c000000"
                aria-label="Palette ff65001e3e620b192c000000"
              ></a>
              <span onClick={copy(this)} data-copy="#FF6500">
                #FF6500
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,655</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="19"
          data-code="4338787e60bfe4b1f0ffe1ff"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 225, 255)" }}
            >
              <a
                href="/palette/4338787e60bfe4b1f0ffe1ff"
                aria-label="Palette 4338787e60bfe4b1f0ffe1ff"
              ></a>
              <span onClick={copy(this)} data-copy="#FFE1FF">
                #FFE1FF
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(228, 177, 240)" }}
            >
              <a
                href="/palette/4338787e60bfe4b1f0ffe1ff"
                aria-label="Palette 4338787e60bfe4b1f0ffe1ff"
              ></a>
              <span onClick={copy(this)} data-copy="#E4B1F0">
                #E4B1F0
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(126, 96, 191)" }}
            >
              <a
                href="/palette/4338787e60bfe4b1f0ffe1ff"
                aria-label="Palette 4338787e60bfe4b1f0ffe1ff"
              ></a>
              <span onClick={copy(this)} data-copy="#7E60BF">
                #7E60BF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(67, 56, 120)" }}
            >
              <a
                href="/palette/4338787e60bfe4b1f0ffe1ff"
                aria-label="Palette 4338787e60bfe4b1f0ffe1ff"
              ></a>
              <span onClick={copy(this)} data-copy="#433878">
                #433878
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,623</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="20"
          data-code="b7e0fffff5cdffcfb3e78f81"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(231, 143, 129)" }}
            >
              <a
                href="/palette/b7e0fffff5cdffcfb3e78f81"
                aria-label="Palette b7e0fffff5cdffcfb3e78f81"
              ></a>
              <span onClick={copy(this)} data-copy="#E78F81">
                #E78F81
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 207, 179)" }}
            >
              <a
                href="/palette/b7e0fffff5cdffcfb3e78f81"
                aria-label="Palette b7e0fffff5cdffcfb3e78f81"
              ></a>
              <span onClick={copy(this)} data-copy="#FFCFB3">
                #FFCFB3
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 245, 205)" }}
            >
              <a
                href="/palette/b7e0fffff5cdffcfb3e78f81"
                aria-label="Palette b7e0fffff5cdffcfb3e78f81"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF5CD">
                #FFF5CD
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(183, 224, 255)" }}
            >
              <a
                href="/palette/b7e0fffff5cdffcfb3e78f81"
                aria-label="Palette b7e0fffff5cdffcfb3e78f81"
              ></a>
              <span onClick={copy(this)} data-copy="#B7E0FF">
                #B7E0FF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,834</span>
              </div>
            </div>
            <span className="date">1 month</span>
          </div>
        </div>
        <div
          className="item"
          data-index="21"
          data-code="d2ff7273ec8b54c39215b392"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(21, 179, 146)" }}
            >
              <a
                href="/palette/d2ff7273ec8b54c39215b392"
                aria-label="Palette d2ff7273ec8b54c39215b392"
              ></a>
              <span onClick={copy(this)} data-copy="#15B392">
                #15B392
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(84, 195, 146)" }}
            >
              <a
                href="/palette/d2ff7273ec8b54c39215b392"
                aria-label="Palette d2ff7273ec8b54c39215b392"
              ></a>
              <span onClick={copy(this)} data-copy="#54C392">
                #54C392
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(115, 236, 139)" }}
            >
              <a
                href="/palette/d2ff7273ec8b54c39215b392"
                aria-label="Palette d2ff7273ec8b54c39215b392"
              ></a>
              <span onClick={copy(this)} data-copy="#73EC8B">
                #73EC8B
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(210, 255, 114)" }}
            >
              <a
                href="/palette/d2ff7273ec8b54c39215b392"
                aria-label="Palette d2ff7273ec8b54c39215b392"
              ></a>
              <span onClick={copy(this)} data-copy="#D2FF72">
                #D2FF72
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,315</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="22"
          data-code="87a2ffc4d7ffffd7c4fff4b5"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 244, 181)" }}
            >
              <a
                href="/palette/87a2ffc4d7ffffd7c4fff4b5"
                aria-label="Palette 87a2ffc4d7ffffd7c4fff4b5"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF4B5">
                #FFF4B5
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 215, 196)" }}
            >
              <a
                href="/palette/87a2ffc4d7ffffd7c4fff4b5"
                aria-label="Palette 87a2ffc4d7ffffd7c4fff4b5"
              ></a>
              <span onClick={copy(this)} data-copy="#FFD7C4">
                #FFD7C4
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(196, 215, 255)" }}
            >
              <a
                href="/palette/87a2ffc4d7ffffd7c4fff4b5"
                aria-label="Palette 87a2ffc4d7ffffd7c4fff4b5"
              ></a>
              <span onClick={copy(this)} data-copy="#C4D7FF">
                #C4D7FF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(135, 162, 255)" }}
            >
              <a
                href="/palette/87a2ffc4d7ffffd7c4fff4b5"
                aria-label="Palette 87a2ffc4d7ffffd7c4fff4b5"
              ></a>
              <span onClick={copy(this)} data-copy="#87A2FF">
                #87A2FF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,691</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="23"
          data-code="eddfe0f5f5f7b7b7b7705c53"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(112, 92, 83)" }}
            >
              <a
                href="/palette/eddfe0f5f5f7b7b7b7705c53"
                aria-label="Palette eddfe0f5f5f7b7b7b7705c53"
              ></a>
              <span onClick={copy(this)} data-copy="#705C53">
                #705C53
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(183, 183, 183)" }}
            >
              <a
                href="/palette/eddfe0f5f5f7b7b7b7705c53"
                aria-label="Palette eddfe0f5f5f7b7b7b7705c53"
              ></a>
              <span onClick={copy(this)} data-copy="#B7B7B7">
                #B7B7B7
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(245, 245, 247)" }}
            >
              <a
                href="/palette/eddfe0f5f5f7b7b7b7705c53"
                aria-label="Palette eddfe0f5f5f7b7b7b7705c53"
              ></a>
              <span onClick={copy(this)} data-copy="#F5F5F7">
                #F5F5F7
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(237, 223, 224)" }}
            >
              <a
                href="/palette/eddfe0f5f5f7b7b7b7705c53"
                aria-label="Palette eddfe0f5f5f7b7b7b7705c53"
              ></a>
              <span onClick={copy(this)} data-copy="#EDDFE0">
                #EDDFE0
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,508</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="24"
          data-code="faf7f0d8d2c2b174574a4947"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(74, 73, 71)" }}
            >
              <a
                href="/palette/faf7f0d8d2c2b174574a4947"
                aria-label="Palette faf7f0d8d2c2b174574a4947"
              ></a>
              <span onClick={copy(this)} data-copy="#4A4947">
                #4A4947
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(177, 116, 87)" }}
            >
              <a
                href="/palette/faf7f0d8d2c2b174574a4947"
                aria-label="Palette faf7f0d8d2c2b174574a4947"
              ></a>
              <span onClick={copy(this)} data-copy="#B17457">
                #B17457
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(216, 210, 194)" }}
            >
              <a
                href="/palette/faf7f0d8d2c2b174574a4947"
                aria-label="Palette faf7f0d8d2c2b174574a4947"
              ></a>
              <span onClick={copy(this)} data-copy="#D8D2C2">
                #D8D2C2
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(250, 247, 240)" }}
            >
              <a
                href="/palette/faf7f0d8d2c2b174574a4947"
                aria-label="Palette faf7f0d8d2c2b174574a4947"
              ></a>
              <span onClick={copy(this)} data-copy="#FAF7F0">
                #FAF7F0
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,275</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="25"
          data-code="347928c0eba6fffbe6fccd2a"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(252, 205, 42)" }}
            >
              <a
                href="/palette/347928c0eba6fffbe6fccd2a"
                aria-label="Palette 347928c0eba6fffbe6fccd2a"
              ></a>
              <span onClick={copy(this)} data-copy="#FCCD2A">
                #FCCD2A
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 251, 230)" }}
            >
              <a
                href="/palette/347928c0eba6fffbe6fccd2a"
                aria-label="Palette 347928c0eba6fffbe6fccd2a"
              ></a>
              <span onClick={copy(this)} data-copy="#FFFBE6">
                #FFFBE6
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(192, 235, 166)" }}
            >
              <a
                href="/palette/347928c0eba6fffbe6fccd2a"
                aria-label="Palette 347928c0eba6fffbe6fccd2a"
              ></a>
              <span onClick={copy(this)} data-copy="#C0EBA6">
                #C0EBA6
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(52, 121, 40)" }}
            >
              <a
                href="/palette/347928c0eba6fffbe6fccd2a"
                aria-label="Palette 347928c0eba6fffbe6fccd2a"
              ></a>
              <span onClick={copy(this)} data-copy="#347928">
                #347928
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,510</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="26"
          data-code="001f3f3a6d8c6a9ab0ead8b1"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(234, 216, 177)" }}
            >
              <a
                href="/palette/001f3f3a6d8c6a9ab0ead8b1"
                aria-label="Palette 001f3f3a6d8c6a9ab0ead8b1"
              ></a>
              <span onClick={copy(this)} data-copy="#EAD8B1">
                #EAD8B1
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(106, 154, 176)" }}
            >
              <a
                href="/palette/001f3f3a6d8c6a9ab0ead8b1"
                aria-label="Palette 001f3f3a6d8c6a9ab0ead8b1"
              ></a>
              <span onClick={copy(this)} data-copy="#6A9AB0">
                #6A9AB0
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(58, 109, 140)" }}
            >
              <a
                href="/palette/001f3f3a6d8c6a9ab0ead8b1"
                aria-label="Palette 001f3f3a6d8c6a9ab0ead8b1"
              ></a>
              <span onClick={copy(this)} data-copy="#3A6D8C">
                #3A6D8C
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(0, 31, 63)" }}
            >
              <a
                href="/palette/001f3f3a6d8c6a9ab0ead8b1"
                aria-label="Palette 001f3f3a6d8c6a9ab0ead8b1"
              ></a>
              <span onClick={copy(this)} data-copy="#001F3F">
                #001F3F
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>5,693</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="27"
          data-code="e7ccccede8dca5b68dc1cfa1"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(193, 207, 161)" }}
            >
              <a
                href="/palette/e7ccccede8dca5b68dc1cfa1"
                aria-label="Palette e7ccccede8dca5b68dc1cfa1"
              ></a>
              <span onClick={copy(this)} data-copy="#C1CFA1">
                #C1CFA1
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(165, 182, 141)" }}
            >
              <a
                href="/palette/e7ccccede8dca5b68dc1cfa1"
                aria-label="Palette e7ccccede8dca5b68dc1cfa1"
              ></a>
              <span onClick={copy(this)} data-copy="#A5B68D">
                #A5B68D
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(237, 232, 220)" }}
            >
              <a
                href="/palette/e7ccccede8dca5b68dc1cfa1"
                aria-label="Palette e7ccccede8dca5b68dc1cfa1"
              ></a>
              <span onClick={copy(this)} data-copy="#EDE8DC">
                #EDE8DC
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(231, 204, 204)" }}
            >
              <a
                href="/palette/e7ccccede8dca5b68dc1cfa1"
                aria-label="Palette e7ccccede8dca5b68dc1cfa1"
              ></a>
              <span onClick={copy(this)} data-copy="#E7CCCC">
                #E7CCCC
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>6,245</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="28"
          data-code="640d5fd91656ee66a6ffeb55"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(255, 235, 85)" }}
            >
              <a
                href="/palette/640d5fd91656ee66a6ffeb55"
                aria-label="Palette 640d5fd91656ee66a6ffeb55"
              ></a>
              <span onClick={copy(this)} data-copy="#FFEB55">
                #FFEB55
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(238, 102, 166)" }}
            >
              <a
                href="/palette/640d5fd91656ee66a6ffeb55"
                aria-label="Palette 640d5fd91656ee66a6ffeb55"
              ></a>
              <span onClick={copy(this)} data-copy="#EE66A6">
                #EE66A6
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(217, 22, 86)" }}
            >
              <a
                href="/palette/640d5fd91656ee66a6ffeb55"
                aria-label="Palette 640d5fd91656ee66a6ffeb55"
              ></a>
              <span onClick={copy(this)} data-copy="#D91656">
                #D91656
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(100, 13, 95)" }}
            >
              <a
                href="/palette/640d5fd91656ee66a6ffeb55"
                aria-label="Palette 640d5fd91656ee66a6ffeb55"
              ></a>
              <span onClick={copy(this)} data-copy="#640D5F">
                #640D5F
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,505</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="29"
          data-code="e5d9f2f5efffcdc1ffa594f9"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(165, 148, 249)" }}
            >
              <a
                href="/palette/e5d9f2f5efffcdc1ffa594f9"
                aria-label="Palette e5d9f2f5efffcdc1ffa594f9"
              ></a>
              <span onClick={copy(this)} data-copy="#A594F9">
                #A594F9
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(205, 193, 255)" }}
            >
              <a
                href="/palette/e5d9f2f5efffcdc1ffa594f9"
                aria-label="Palette e5d9f2f5efffcdc1ffa594f9"
              ></a>
              <span onClick={copy(this)} data-copy="#CDC1FF">
                #CDC1FF
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(245, 239, 255)" }}
            >
              <a
                href="/palette/e5d9f2f5efffcdc1ffa594f9"
                aria-label="Palette e5d9f2f5efffcdc1ffa594f9"
              ></a>
              <span onClick={copy(this)} data-copy="#F5EFFF">
                #F5EFFF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(229, 217, 242)" }}
            >
              <a
                href="/palette/e5d9f2f5efffcdc1ffa594f9"
                aria-label="Palette e5d9f2f5efffcdc1ffa594f9"
              ></a>
              <span onClick={copy(this)} data-copy="#E5D9F2">
                #E5D9F2
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>5,621</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="30"
          data-code="fff0d17957576643433b3030"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(59, 48, 48)" }}
            >
              <a
                href="/palette/fff0d17957576643433b3030"
                aria-label="Palette fff0d17957576643433b3030"
              ></a>
              <span onClick={copy(this)} data-copy="#3B3030">
                #3B3030
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(102, 67, 67)" }}
            >
              <a
                href="/palette/fff0d17957576643433b3030"
                aria-label="Palette fff0d17957576643433b3030"
              ></a>
              <span onClick={copy(this)} data-copy="#664343">
                #664343
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(121, 87, 87)" }}
            >
              <a
                href="/palette/fff0d17957576643433b3030"
                aria-label="Palette fff0d17957576643433b3030"
              ></a>
              <span onClick={copy(this)} data-copy="#795757">
                #795757
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 240, 209)" }}
            >
              <a
                href="/palette/fff0d17957576643433b3030"
                aria-label="Palette fff0d17957576643433b3030"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF0D1">
                #FFF0D1
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,501</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="31"
          data-code="6256ca86d293c1e2a4fdfad9"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(253, 250, 217)" }}
            >
              <a
                href="/palette/6256ca86d293c1e2a4fdfad9"
                aria-label="Palette 6256ca86d293c1e2a4fdfad9"
              ></a>
              <span onClick={copy(this)} data-copy="#FDFAD9">
                #FDFAD9
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(193, 226, 164)" }}
            >
              <a
                href="/palette/6256ca86d293c1e2a4fdfad9"
                aria-label="Palette 6256ca86d293c1e2a4fdfad9"
              ></a>
              <span onClick={copy(this)} data-copy="#C1E2A4">
                #C1E2A4
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(134, 210, 147)" }}
            >
              <a
                href="/palette/6256ca86d293c1e2a4fdfad9"
                aria-label="Palette 6256ca86d293c1e2a4fdfad9"
              ></a>
              <span onClick={copy(this)} data-copy="#86D293">
                #86D293
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(98, 86, 202)" }}
            >
              <a
                href="/palette/6256ca86d293c1e2a4fdfad9"
                aria-label="Palette 6256ca86d293c1e2a4fdfad9"
              ></a>
              <span onClick={copy(this)} data-copy="#6256CA">
                #6256CA
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,243</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="32"
          data-code="384b70507687fcfaeeb8001f"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(184, 0, 31)" }}
            >
              <a
                href="/palette/384b70507687fcfaeeb8001f"
                aria-label="Palette 384b70507687fcfaeeb8001f"
              ></a>
              <span onClick={copy(this)} data-copy="#B8001F">
                #B8001F
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(252, 250, 238)" }}
            >
              <a
                href="/palette/384b70507687fcfaeeb8001f"
                aria-label="Palette 384b70507687fcfaeeb8001f"
              ></a>
              <span onClick={copy(this)} data-copy="#FCFAEE">
                #FCFAEE
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(80, 118, 135)" }}
            >
              <a
                href="/palette/384b70507687fcfaeeb8001f"
                aria-label="Palette 384b70507687fcfaeeb8001f"
              ></a>
              <span onClick={copy(this)} data-copy="#507687">
                #507687
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(56, 75, 112)" }}
            >
              <a
                href="/palette/384b70507687fcfaeeb8001f"
                aria-label="Palette 384b70507687fcfaeeb8001f"
              ></a>
              <span onClick={copy(this)} data-copy="#384B70">
                #384B70
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,178</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="33"
          data-code="ff6600f5f5f58fd14f604cc3"
          style={{ animationDelay: "90ms" }}
                  >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(96, 76, 195)" }}
            >
              <a
                href="/palette/ff6600f5f5f58fd14f604cc3"
                aria-label="Palette ff6600f5f5f58fd14f604cc3"
              ></a>
              <span onClick={copy(this)} data-copy="#604CC3">
                #604CC3
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(143, 209, 79)" }}
            >
              <a
                href="/palette/ff6600f5f5f58fd14f604cc3"
                aria-label="Palette ff6600f5f5f58fd14f604cc3"
              ></a>
              <span onClick={copy(this)} data-copy="#8FD14F">
                #8FD14F
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(245, 245, 245)" }}
            >
              <a
                href="/palette/ff6600f5f5f58fd14f604cc3"
                aria-label="Palette ff6600f5f5f58fd14f604cc3"
              ></a>
              <span onClick={copy(this)} data-copy="#F5F5F5">
                #F5F5F5
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(255, 102, 0)" }}
            >
              <a
                href="/palette/ff6600f5f5f58fd14f604cc3"
                aria-label="Palette ff6600f5f5f58fd14f604cc3"
              ></a>
              <span onClick={copy(this)} data-copy="#FF6600">
                #FF6600
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,689</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="34"
          data-code="4379f2ffeb006ec207117554"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(17, 117, 84)" }}
            >
              <a
                href="/palette/4379f2ffeb006ec207117554"
                aria-label="Palette 4379f2ffeb006ec207117554"
              ></a>
              <span onClick={copy(this)} data-copy="#117554">
                #117554
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(110, 194, 7)" }}
            >
              <a
                href="/palette/4379f2ffeb006ec207117554"
                aria-label="Palette 4379f2ffeb006ec207117554"
              ></a>
              <span onClick={copy(this)} data-copy="#6EC207">
                #6EC207
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(255, 235, 0)" }}
            >
              <a
                href="/palette/4379f2ffeb006ec207117554"
                aria-label="Palette 4379f2ffeb006ec207117554"
              ></a>
              <span onClick={copy(this)} data-copy="#FFEB00">
                #FFEB00
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(67, 121, 242)" }}
            >
              <a
                href="/palette/4379f2ffeb006ec207117554"
                aria-label="Palette 4379f2ffeb006ec207117554"
              ></a>
              <span onClick={copy(this)} data-copy="#4379F2">
                #4379F2
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>1,516</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="35"
          data-code="181c143c3d37697565ecdfcc"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(236, 223, 204)" }}
            >
              <a
                href="/palette/181c143c3d37697565ecdfcc"
                aria-label="Palette 181c143c3d37697565ecdfcc"
              ></a>
              <span onClick={copy(this)} data-copy="#ECDFCC">
                #ECDFCC
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(105, 117, 101)" }}
            >
              <a
                href="/palette/181c143c3d37697565ecdfcc"
                aria-label="Palette 181c143c3d37697565ecdfcc"
              ></a>
              <span onClick={copy(this)} data-copy="#697565">
                #697565
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(60, 61, 55)" }}
            >
              <a
                href="/palette/181c143c3d37697565ecdfcc"
                aria-label="Palette 181c143c3d37697565ecdfcc"
              ></a>
              <span onClick={copy(this)} data-copy="#3C3D37">
                #3C3D37
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(24, 28, 20)" }}
            >
              <a
                href="/palette/181c143c3d37697565ecdfcc"
                aria-label="Palette 181c143c3d37697565ecdfcc"
              ></a>
              <span onClick={copy(this)} data-copy="#181C14">
                #181C14
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,521</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="36"
          data-code="6439ff4f75ff00ccdd7cf5ff"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(124, 245, 255)" }}
            >
              <a
                href="/palette/6439ff4f75ff00ccdd7cf5ff"
                aria-label="Palette 6439ff4f75ff00ccdd7cf5ff"
              ></a>
              <span onClick={copy(this)} data-copy="#7CF5FF">
                #7CF5FF
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(0, 204, 221)" }}
            >
              <a
                href="/palette/6439ff4f75ff00ccdd7cf5ff"
                aria-label="Palette 6439ff4f75ff00ccdd7cf5ff"
              ></a>
              <span onClick={copy(this)} data-copy="#00CCDD">
                #00CCDD
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(79, 117, 255)" }}
            >
              <a
                href="/palette/6439ff4f75ff00ccdd7cf5ff"
                aria-label="Palette 6439ff4f75ff00ccdd7cf5ff"
              ></a>
              <span onClick={copy(this)} data-copy="#4F75FF">
                #4F75FF
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(100, 57, 255)" }}
            >
              <a
                href="/palette/6439ff4f75ff00ccdd7cf5ff"
                aria-label="Palette 6439ff4f75ff00ccdd7cf5ff"
              ></a>
              <span onClick={copy(this)} data-copy="#6439FF">
                #6439FF
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>2,668</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="37"
          data-code="624e888967b3cb80abe6d9a2"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(230, 217, 162)" }}
            >
              <a
                href="/palette/624e888967b3cb80abe6d9a2"
                aria-label="Palette 624e888967b3cb80abe6d9a2"
              ></a>
              <span onClick={copy(this)} data-copy="#E6D9A2">
                #E6D9A2
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(203, 128, 171)" }}
            >
              <a
                href="/palette/624e888967b3cb80abe6d9a2"
                aria-label="Palette 624e888967b3cb80abe6d9a2"
              ></a>
              <span onClick={copy(this)} data-copy="#CB80AB">
                #CB80AB
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(137, 103, 179)" }}
            >
              <a
                href="/palette/624e888967b3cb80abe6d9a2"
                aria-label="Palette 624e888967b3cb80abe6d9a2"
              ></a>
              <span onClick={copy(this)} data-copy="#8967B3">
                #8967B3
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(98, 78, 136)" }}
            >
              <a
                href="/palette/624e888967b3cb80abe6d9a2"
                aria-label="Palette 624e888967b3cb80abe6d9a2"
              ></a>
              <span onClick={copy(this)} data-copy="#624E88">
                #624E88
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>3,118</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="38"
          data-code="c96868fadfa1fff4ea7eacb5"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(126, 172, 181)" }}
            >
              <a
                href="/palette/c96868fadfa1fff4ea7eacb5"
                aria-label="Palette c96868fadfa1fff4ea7eacb5"
              ></a>
              <span onClick={copy(this)} data-copy="#7EACB5">
                #7EACB5
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(255, 244, 234)" }}
            >
              <a
                href="/palette/c96868fadfa1fff4ea7eacb5"
                aria-label="Palette c96868fadfa1fff4ea7eacb5"
              ></a>
              <span onClick={copy(this)} data-copy="#FFF4EA">
                #FFF4EA
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(250, 223, 161)" }}
            >
              <a
                href="/palette/c96868fadfa1fff4ea7eacb5"
                aria-label="Palette c96868fadfa1fff4ea7eacb5"
              ></a>
              <span onClick={copy(this)} data-copy="#FADFA1">
                #FADFA1
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(201, 104, 104)" }}
            >
              <a
                href="/palette/c96868fadfa1fff4ea7eacb5"
                aria-label="Palette c96868fadfa1fff4ea7eacb5"
              ></a>
              <span onClick={copy(this)} data-copy="#C96868">
                #C96868
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>4,358</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
        <div
          className="item"
          data-index="39"
          data-code="d2e0fbfef9d9dee5d48eaccd"
          style={{ animationDelay: "90ms" }}
          
        >
          <div className="palette">
            <div
              className="place c3"
              style={{ backgroundColor: "rgb(142, 172, 205)" }}
            >
              <a
                href="/palette/d2e0fbfef9d9dee5d48eaccd"
                aria-label="Palette d2e0fbfef9d9dee5d48eaccd"
              ></a>
              <span onClick={copy(this)} data-copy="#8EACCD">
                #8EACCD
              </span>
            </div>
            <div
              className="place c2"
              style={{ backgroundColor: "rgb(222, 229, 212)" }}
            >
              <a
                href="/palette/d2e0fbfef9d9dee5d48eaccd"
                aria-label="Palette d2e0fbfef9d9dee5d48eaccd"
              ></a>
              <span onClick={copy(this)} data-copy="#DEE5D4">
                #DEE5D4
              </span>
            </div>
            <div
              className="place c1"
              style={{ backgroundColor: "rgb(254, 249, 217)" }}
            >
              <a
                href="/palette/d2e0fbfef9d9dee5d48eaccd"
                aria-label="Palette d2e0fbfef9d9dee5d48eaccd"
              ></a>
              <span onClick={copy(this)} data-copy="#FEF9D9">
                #FEF9D9
              </span>
            </div>
            <div
              className="place c0"
              style={{ backgroundColor: "rgb(210, 224, 251)" }}
            >
              <a
                href="/palette/d2e0fbfef9d9dee5d48eaccd"
                aria-label="Palette d2e0fbfef9d9dee5d48eaccd"
              ></a>
              <span onClick={copy(this)} data-copy="#D2E0FB">
                #D2E0FB
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="actions flex">
              <div className="button like">
                <div className="icon" icon="like"></div>
                <span>6,359</span>
              </div>
            </div>
            <span className="date">2 months</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaletteGrid;
