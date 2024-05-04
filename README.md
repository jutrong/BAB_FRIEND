# 밥-프렌즈 🍚

### 새로운 사람들과 함께 밥 약속을 쉽게 잡도록 도와주는 플랫폼

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FGINK-SS%2Fbab-friend&count_bg=%23F39C12&title_bg=%23AE8543&icon=justeat.svg&icon_color=%23E7E7E7&title=%EB%B0%A5-%ED%94%84%EB%A0%8C%EC%A6%88&edge_flat=false)](https://hits.seeyoufarm.com)

![image](https://github.com/GINK-SS/bab-friend/assets/66083363/e3a32550-d47f-40f3-8dea-851f2fcac6e0)

<br />

## ✓ 프로젝트 관련 링크

> Demo : https://bab-friend.gink-ss.com (비용 문제로 배포 중단)

<br />

## ✓ 밥-프렌즈 소개

**밥-프렌즈**는 `새로운 사람들과 함께 밥 약속을 쉽게 잡도록 도와주는 플랫폼` 입니다.

게시물을 작성하거나 작성된 게시물을 확인하여 작성자가 등록한 링크(오픈채팅방)를 통해 참여할 수 있도록 도와줍니다.

지역, 가격, 음주 여부, 나이·성별 제한 등을 활용하여 설정할 수 있으며

댓글을 통해 작성자와 상호작용 또한 가능합니다.

참여한 게시물에 한하여 후기를 작성할 수 있으며 본인에게 작성된 후기도 확인할 수 있습니다.

<br />

## ✓ 주요 기능

- 카카오 로그인
- 게시물 목록 확인 (무한 스크롤)
- 게시물 필터 기능
  - `참여 가능만 보기 O`
    - `로그인 O` - '확정 완료 · 나이 제한 · 성별 제한' 제외한 나머지 게시물 확인
    - `로그인 X` - '확정 완료' 제외한 나머지 게시물 확인
  - `참여 가능만 보기 X` - 모든 게시물 확인
- 게시물 작성 (지도에서 장소 검색 후 선택 기능)
- 참여한 게시물 확인
- 검색 기능
- 후기 작성 및 후기 목록 확인

<br />

## ✓ 기술 스택

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/ReactJS-61DAFB?style=flat-square&logo=React&logoColor=black)
![Static Badge](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white)
![Static Badge](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=white)
![Static Badge](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white)
![Static Badge](https://img.shields.io/badge/MSW-FD6A33?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIycHgiIGhlaWdodD0iMTIycHgiIHZpZXdCb3g9IjAgMCAxMjIgMTIyIiB2ZXJzaW9uPSIxLjEiPg0KICAgIDx0aXRsZT5tc3ctbG9nbzwvdGl0bGU+DQogICAgPGcgaWQ9Im1zdy1sb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2My4wMDAwMDAsIDYwLjUwMDAwMCkgcm90YXRlKC00Mi4wMDAwMDApIHRyYW5zbGF0ZSgtNjMuMDAwMDAwLCAtNjAuNTAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtMjEuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIyMSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNzUuMTM5NjY2Niw0Ni42NjgzMjUgQzc4LjYwMjQ5MTksNDYuNjY4MzI1IDgxLjczNzQ5MTksNDguMDcxOTEyNCA4NC4wMDY3ODU2LDUwLjM0MTIwNiBDODYuMjc2MDc5Myw1Mi42MTA0OTk3IDg3LjY3OTY2NjYsNTUuNzQ1NDk5NyA4Ny42Nzk2NjY2LDU5LjIwODMyNSBDODcuNjc5NjY2Niw2Mi4zMDM2NzE2IDg2LjUzNDg1Miw2NS4yODk2NTA1IDg0LjQ2NTUzNTYsNjcuNTkxNjI3OSBMODQuNDY1NTM1Niw2Ny41OTE2Mjc5IEw0OC4yMzIwNjQ4LDEwNy44OTg5NjMgQzQ3LjUxMjA5MzQsMTA4LjY5OTg4NCA0Ni41MzU2NDQ0LDEwOS4xMzMxNTUgNDUuNTM4OTU4MSwxMDkuMTg2MjA0IEM0NC41NDIyNzE4LDEwOS4yMzkyNTIgNDMuNTI1MzQ4MiwxMDguOTEyMDc3IDQyLjcyNDQyNzYsMTA4LjE5MjEwNiBMNDIuNzI0NDI3NiwxMDguMTkyMTA2IEw2LjE5NzgxNDM1LDY3LjU5MTYyNzkgQzMuODgyODI5MTgsNjUuMDE2MzYwMyAyLjgzMDgzNjksNjEuNzQ2NTU5OSAzLjAwMTQwNzgxLDU4LjU0MTgzMDIgQzMuMTcxOTc4NzMsNTUuMzM3MTAwNCA0LjU2NTExMjg0LDUyLjE5NzQ0MTIgNy4xNDAzODA0Niw0OS44ODI0NTYgQzkuNDQyMzU3ODcsNDcuODEzMTM5NiAxMi40MjgzMzY4LDQ2LjY2ODMyNSAxNS41MjM2ODMzLDQ2LjY2ODMyNSBMMTUuNTIzNjgzMyw0Ni42NjgzMjUgWiIgaWQ9ImJhY2siIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iMC40OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuMzMxNjc1LCA4MS41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtNDUuMzMxNjc1LCAtODEuNTAwMDAwKSAiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuODYwODIsNDYuNjY4MzI1IEMxNDYuOTM3Nzc1LDQ2LjY2ODMyNSAxNDcuOTEyNzc1LDQ3LjEwNDg0NzQgMTQ4LjYxODUzNiw0Ny44MTA2MDg2IEMxNDkuMzI0Mjk3LDQ4LjUxNjM2OTggMTQ5Ljc2MDgyLDQ5LjQ5MTM2OTggMTQ5Ljc2MDgyLDUwLjU2ODMyNSBDMTQ5Ljc2MDgyLDUxLjUzMDk5MjYgMTQ5LjQwNDc3Nyw1Mi40NTk2NDY0IDE0OC43NjEyMSw1My4xNzU1NzI0IEwxNDguNzYxMjEsNTMuMTc1NTcyNCBMOTkuNTY4NzE0OSwxMDcuODk4OTYzIEM5OC44NDg3NDM1LDEwOC42OTk4ODQgOTcuODcyMjk0NCwxMDkuMTMzMTU1IDk2Ljg3NTYwODEsMTA5LjE4NjIwNCBDOTUuODc4OTIxOCwxMDkuMjM5MjUyIDk0Ljg2MTk5ODMsMTA4LjkxMjA3NyA5NC4wNjEwNzc3LDEwOC4xOTIxMDYgTDk0LjA2MTA3NzcsMTA4LjE5MjEwNiBMNDQuNTc1NDQwNCw1My4xNzU1NzI0IEM0My44NTU0Njg5LDUyLjM3NDY1MTggNDMuNTI4Mjk0Myw1MS4zNTc3MjgyIDQzLjU4MTM0MjcsNTAuMzYxMDQxOSBDNDMuNjM0MzkxLDQ5LjM2NDM1NTYgNDQuMDY3NjYyNCw0OC4zODc5MDY2IDQ0Ljg2ODU4Myw0Ny42Njc5MzUyIEM0NS41ODQ1MDksNDcuMDI0MzY3OSA0Ni41MTMxNjI3LDQ2LjY2ODMyNSA0Ny40NzU4MzAzLDQ2LjY2ODMyNSBMNDcuNDc1ODMwMyw0Ni42NjgzMjUgWiIgaWQ9ImZyb250IiBzdHJva2U9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2LjY2ODMyNSwgODEuNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC05Ni42NjgzMjUsIC04MS41MDAwMDApICIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+)
![Static Badge](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

### CI / CD

![Static Badge](https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![Static Badge](https://img.shields.io/badge/Amazon_CloudFront-7E4BDA?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSI+DQogICAgPHRpdGxlPkljb24tQXJjaGl0ZWN0dXJlLzE2L0FyY2hfQW1hem9uLUNsb3VkRnJvbnRfMTY8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLUFyY2hpdGVjdHVyZS8xNi9BcmNoX0FtYXpvbi1DbG91ZEZyb250XzE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9Ikljb24tQXJjaGl0ZWN0dXJlLUJHLzE2L05ldHdvcmtpbmctQ29udGVudC1EZWxpdmVyeSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+DQogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4NCiAgICAgICAgPC9nPg0KICAgICAgICA8cGF0aCBkPSJNMTYsMTUuNDk4MDczNyBDMTYsMTUuMjIxOTU1NiAxNS43NzUsMTQuOTk3ODU5NyAxNS41LDE0Ljk5Nzg1OTcgQzE1LjIyNSwxNC45OTc4NTk3IDE1LDE1LjIyMTk1NTYgMTUsMTUuNDk4MDczNyBDMTUsMTUuNzc0MTkxOSAxNS4yMjUsMTUuOTk4Mjg3NyAxNS41LDE1Ljk5ODI4NzcgQzE1Ljc3NSwxNS45OTgyODc3IDE2LDE1Ljc3NDE5MTkgMTYsMTUuNDk4MDczNyBNMTcsMTUuNDk4MDczNyBDMTcsMTYuMzI1NDI3NyAxNi4zMjcsMTYuOTk4NzE1OCAxNS41LDE2Ljk5ODcxNTggQzE0LjY3MywxNi45OTg3MTU4IDE0LDE2LjMyNTQyNzcgMTQsMTUuNDk4MDczNyBDMTQsMTQuNjcwNzE5NyAxNC42NzMsMTMuOTk3NDMxNiAxNS41LDEzLjk5NzQzMTYgQzE2LjMyNywxMy45OTc0MzE2IDE3LDE0LjY3MDcxOTcgMTcsMTUuNDk4MDczNyBNOSwxMS40OTYzNjE0IEM5LDExLjIyMDI0MzMgOC43NzUsMTAuOTk2MTQ3NCA4LjUsMTAuOTk2MTQ3NCBDOC4yMjUsMTAuOTk2MTQ3NCA4LDExLjIyMDI0MzMgOCwxMS40OTYzNjE0IEM4LDExLjc3MjQ3OTYgOC4yMjUsMTEuOTk2NTc1NSA4LjUsMTEuOTk2NTc1NSBDOC43NzUsMTEuOTk2NTc1NSA5LDExLjc3MjQ3OTYgOSwxMS40OTYzNjE0IE0xMCwxMS40OTYzNjE0IEMxMCwxMi4zMjM3MTU1IDkuMzI3LDEyLjk5NzAwMzUgOC41LDEyLjk5NzAwMzUgQzcuNjczLDEyLjk5NzAwMzUgNywxMi4zMjM3MTU1IDcsMTEuNDk2MzYxNCBDNywxMC42NjkwMDc0IDcuNjczLDkuOTk1NzE5MzQgOC41LDkuOTk1NzE5MzQgQzkuMzI3LDkuOTk1NzE5MzQgMTAsMTAuNjY5MDA3NCAxMCwxMS40OTYzNjE0IE0xMiw3LjQ5NDY0OTE4IEMxMiw3Ljc3MDc2NzMzIDEyLjIyNSw3Ljk5NDg2MzIxIDEyLjUsNy45OTQ4NjMyMSBDMTIuNzc1LDcuOTk0ODYzMjEgMTMsNy43NzA3NjczMyAxMyw3LjQ5NDY0OTE4IEMxMyw3LjIxODUzMTAzIDEyLjc3NSw2Ljk5NDQzNTE1IDEyLjUsNi45OTQ0MzUxNSBDMTIuMjI1LDYuOTk0NDM1MTUgMTIsNy4yMTg1MzEwMyAxMiw3LjQ5NDY0OTE4IE0xMSw3LjQ5NDY0OTE4IEMxMSw2LjY2NzI5NTE3IDExLjY3Myw1Ljk5NDAwNzA4IDEyLjUsNS45OTQwMDcwOCBDMTMuMzI3LDUuOTk0MDA3MDggMTQsNi42NjcyOTUxNyAxNCw3LjQ5NDY0OTE4IEMxNCw4LjMyMjAwMzE5IDEzLjMyNyw4Ljk5NTI5MTI4IDEyLjUsOC45OTUyOTEyOCBDMTEuNjczLDguOTk1MjkxMjggMTEsOC4zMjIwMDMxOSAxMSw3LjQ5NDY0OTE4IE0xOSwxMS45OTY1NzU1IEMxOSw5LjczOTYwOTc2IDE3LjkwMyw3LjYzOTcxMTI1IDE2LjEwMSw2LjMzMjE1MTc3IEMxNS45MTcsNi4yNzMxMjY1MSAxNS40MDcsNi40MjMxOTA3MiAxNC41NjYsNi43ODQzNDUyNSBDMTQuNDE1LDYuODQ4MzcyNjUgMTQuMjg3LDYuOTAyMzk1NzYgMTQuMTk3LDYuOTM1NDA5ODkgTDEzLjg1Nyw1Ljk5NDAwNzA4IEMxMy45MzUsNS45NjY5OTU1MiAxNC4wNDQsNS45MTg5NzQ5OCAxNC4xNzMsNS44NjM5NTE0MyBDMTQuMzk0LDUuNzY5OTExMTkgMTQuNjExLDUuNjc5ODcyNjcgMTQuODIzLDUuNTk5ODM4NDIgQzEzLjkzOSw1LjIwODY3MTA1IDEyLjk3OSw0Ljk5MzU3OTAxIDEyLDQuOTkzNTc5MDEgQzExLjMxMyw0Ljk5MzU3OTAxIDEwLjY0Miw1LjA5MTYyMDk3IDEwLjAwMiw1LjI4NDcwMzU4IEM5Ljk1Niw1LjI5NzcwOTE1IDkuOTE1LDUuMzIwNzE4OTkgOS44Nyw1LjMzNDcyNDk5IEMxMC4yMiw1LjQ2NTc4MTA2IDEwLjYzNyw1LjYzNDg1MzQgMTEuMTMyLDUuODU2OTQ4NDQgTDEwLjcyNCw2Ljc2OTMzODgzIEM5LjUxOCw2LjIyODEwNzI1IDguODI4LDYuMDI3MDIxMjEgOC41MDcsNS45NTE5ODkxIEM2LjY5Miw3LjAwNDQzOTQzIDUuNDI5LDguODI3MjE5MzYgNS4xMDQsMTAuOTI5MTE4NyBDNS40MjYsMTAuODg3MTAwNyA1Ljc1MSwxMC44NjIwOSA2LjA5NywxMC44NTMwODYyIEw2LjEyMiwxMS44NTM1MTQzIEM1LjcyNSwxMS44NjM1MTg1IDUuMzYzLDExLjkwNTUzNjUgNS4wMDEsMTEuOTY0NTYxOCBDNS4wMDEsMTEuOTc0NTY2MSA1LDExLjk4NTU3MDggNSwxMS45OTY1NzU1IEM1LDE0LjI5NzU2IDYuMTI1LDE2LjQxNzQ2NzEgNy45NzYsMTcuNzE4MDIzNiBDNy43NzUsMTcuMDE2NzIzNSA3LjYwNCwxNi4xNzczNjQ0IDcuNjA0LDE1LjMzMTAwMjIgQzcuNjA0LDE1LjE3NDkzNTQgNy41OTksMTUuMDA5ODY0OCA3LjU5NCwxNC44NDI3OTMzIEM3LjU3OCwxNC4zNjU1ODkxIDcuNTYyLDEzLjg3MjM3ODEgNy42NSwxMy40MjMxODU5IEw4LjYzMSwxMy42MTYyNjg1IEM4LjU2NCwxMy45NTM0MTI4IDguNTc5LDE0LjM4ODU5OSA4LjU5MywxNC44MDk3NzkyIEM4LjU5OSwxNC45ODg4NTU4IDguNjA0LDE1LjE2MzkzMDcgOC42MDQsMTUuMzMxMDAyMiBDOC42MDQsMTYuMjI5Mzg2NiA4Ljg1MywxNy4zNTQ4NjgyIDkuMjc3LDE4LjQ0MzMzMzkgQzEwLjUwNCwxOC45NTk1NTQ4IDExLjg1OSwxOS4xMDg2MTg2IDEzLjE1NCwxOC44OTM1MjY2IEMxMy4yNjYsMTguNjg3NDM4NCAxMy40MDIsMTguNDc4MzQ4OSAxMy41NDYsMTguMjY2MjU4MiBDMTMuNzYsMTcuOTUwMTIyOSAxMy45ODEsMTcuNjIzOTgzMyAxNC4wNjcsMTcuMzI3ODU2NiBMMTUuMDI4LDE3LjYwNjk3NjEgQzE0LjkzOCwxNy45MTkxMDk2IDE0Ljc3NCwxOC4yMDEyMzAzIDE0LjYwMSwxOC40NzQzNDcyIEMxNS4xOTksMTguMjM1MjQ0OSAxNS43NjgsMTcuOTM0MTE2IDE2LjI3OSwxNy41MzY5NDYxIEMxOC4wMDksMTYuMTk4MzczNCAxOSwxNC4xNzg1MDkxIDE5LDExLjk5NjU3NTUgTTIwLDExLjk5NjU3NTUgQzIwLDE0LjQ5MDY0MjYgMTguODY3LDE2Ljc5ODYzMDIgMTYuODkyLDE4LjMyNzI4NDMgQzE2LjE5MywxOC44Njk1MTYzIDE1LjQxNiwxOS4yODc2OTUyIDE0LjU4MiwxOS41Njg4MTU1IEMxMy43NiwxOS44NTM5Mzc1IDEyLjg5LDIwIDEyLDIwIEMxMC42ODYsMjAgOS4zODEsMTkuNjcxODU5NiA4LjIyNSwxOS4wNTI1OTQ2IEM1LjYxOSwxNy42NTY5OTc1IDQsMTQuOTUzODQwOCA0LDExLjk5NjU3NTUgQzQsMTEuODMxNTA0OCA0LjAwNCwxMS42Njc0MzQ2IDQuMDE4LDExLjUwNjM2NTcgQzQuMjEyLDguMTczOTM5ODQgNi41MDIsNS4yODI3MDI3MyA5LjcxNSw0LjMyNjI5MzQ5IEMxMS43MjksMy43MTkwMzM2NiAxNC4wNTIsMy45NjUxMzg5NiAxNS45MSw1LjAxNjU4ODg2IEMxOC40MzMsNi40MzAxOTM3MiAyMCw5LjEwNDMzNzk0IDIwLDExLjk5NjU3NTUgTTExLjA3NSw4LjkzNTI2NTU5IEwxMC40MTksOC4xODE5NDMyNiBDOS45MDMsOC42MzAxMzUwMyA5Ljc2NSw4Ljg2MDIzMzQ5IDkuNTM0LDkuMjQwMzk2MTUgQzkuNDY3LDkuMzUxNDQzNjcgOS4zODksOS40ODE0OTkzMiA5LjI4NSw5LjY0MDU2NzM4IEwxMC4xMjMsMTAuMTg1ODAwNyBDMTAuMjMzLDEwLjAxNTcyNzkgMTAuMzE3LDkuODc3NjY4ODMgMTAuMzksOS43NTg2MTc4OSBDMTAuNTk0LDkuNDIxNDczNjMgMTAuNjc4LDkuMjgyNDE0MTMgMTEuMDc1LDguOTM1MjY1NTkgTTEwLjY0OSwxMS4zNjYzMDU4IEwxMC4zMjUsMTIuMzExNzEwMyBDMTEuNDM4LDEyLjY5NDg3NDMgMTIuNDExLDEzLjMwNzEzNjIgMTMuMzg3LDE0LjIzNzUzNDMgTDE0LjA3NiwxMy41MTMyMjQ0IEMxMi45OTMsMTIuNDc5NzgyMiAxMS45MDQsMTEuNzk3NDkwMyAxMC42NDksMTEuMzY2MzA1OCBNMTMuMjg1LDkuMDc0MzI1MDkgTDE0LjEyMSw4LjUyNTA5MDA5IEMxNS4wODMsOS45OTI3MTgwNiAxNS42MjQsMTEuNjA0NDA3NyAxNS43MywxMy4zMTYxNDAxIEwxNC43MzIsMTMuMzc4MTY2NiBDMTQuNjM4LDExLjg0MjUwOTYgMTQuMTUsMTAuMzkzODg5NyAxMy4yODUsOS4wNzQzMjUwOSIgaWQ9IkFtYXpvbi1DbG91ZEZyb250X0ljb25fMTZfU3F1aWQiIGZpbGw9IiNGRkZGRkYiLz4NCiAgICA8L2c+DQo8L3N2Zz4=)
![Static Badge](https://img.shields.io/badge/Github_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

<br />

## ✓ 서비스 화면 샘플 예시

### 메인 화면

![image](https://github.com/GINK-SS/bab-friend/assets/66083363/8a8bf562-5859-4ae1-a176-44410098b666)

> 현재 참여 가능한 게시물만 보기(좌)

> '확정 완료' 및 '나이·성별 제한' 포함하여 전체 게시물 보기(우)

### 작성 포스트

![image](https://github.com/GINK-SS/bab-friend/assets/66083363/d5d3abe3-b642-4f8b-b4ba-ff5c3ae7e516)

### 내 정보 페이지 및 참여한 게시물 리스트

![image](https://github.com/GINK-SS/bab-friend/assets/66083363/8448d4c4-da51-4702-9d88-bab67ac3aa8a)

## ✓ 팀원

<table>
  <tr>
    <td style="width:300px"><a href="https://github.com/GINK-SS"><img src="https://avatars.githubusercontent.com/u/66083363?&v=4" /></a></td>
    <td style="width:300px"><a href="https://github.com/jutrong"><img src="https://avatars.githubusercontent.com/u/113658811?&v=4" /></a></td>
    <td style="width:300px"><a href="https://github.com/hun-cloud"><img src="https://avatars.githubusercontent.com/u/89080095?v=4" /></a></td>
  </tr>
  
  <tr>
    <td style="text-align:center">이상민</td>
    <td style="text-align:center">이주현</td>
    <td style="text-align:center">이재훈</td>
  </tr>

  <tr>
     <td style="text-align:center"><b>💻&nbsp&nbspFrontend</b></td>
     <td style="text-align:center"><b>💻&nbsp&nbspFrontend</b></td>
     <td style="text-align:center"><b>🔨&nbsp&nbspBackend</b></td>
  </tr>
</table>

<br />
