import { Children, createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
    const textBoxPosition = {
        headerMenu:{
            center:'justify-center',
            left:'justify-start ps-10',
            right:'justify-end pe-10 ',
        },
        hero: {
            center: {
                parent: "items-center ",
                titleSubTitleDiv: '',
                setBgDiv: {
                    main: '',
                    subDiv: 'items-center ',
                },
                titleInput: 'text-center',
                textArea: 'text-center',
            },
            left: {
                parent: "items-start",
                titleSubTitleDiv: 'items-start ms-12 ',
                setBgDiv: {
                    main: 'items-start ms-12 ',
                    subDiv: 'items-start ',
                },
                titleInput: 'text-start ps-4 ',
                textArea: 'text-start ps-4 ',
            },
            right: {
                parent: "items-end",
                titleSubTitleDiv: 'items-end me-12 ',
                setBgDiv: {
                    main: 'items-end me-12 ',
                    subDiv: 'items-end ',
                },
                titleInput: 'text-end pe-4 ',
                textArea: 'text-end pe-4 ',
            }
        }
    }
    const themes =
    {
        hero: {
            light: {
                menuDiv: 'bg-gray-300 opacity-80 border-b-2 border-b-gray-300 text-gray-900 ',
                selectThemeInput: 'bg-gray-300  opacity-80 text-gray-900 ',
                setBgDiv: {
                    main: "bg-gray-300 border-2 border-gray-300 bg-opacity-70 shadow-sm hover:shadow-lg",
                    input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-gray-700"
                },
                titleSubTitleDiv: {
                    main: ' bg-gray-300 border-2 border-gray-300 bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700 ',
                    textArea: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',

                }

            },
            dark: {
                menuDiv: 'bg-gray-900 opacity-80 border-b-2 border-b-gray-700 text-white ',
                selectThemeInput: 'bg-gray-700 text-white ',
                setBgDiv: {
                    main: "bg-gray-900 border-2 border-gray-700  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-gray-400 bg-opacity-50 border-b-1 text-white ',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-white"
                },
                titleSubTitleDiv: {
                    main: 'bg-gray-900 border-2 border-gray-700 bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-gray-400 bg-opacity-50 border-b-1 text-gray-200 ',
                    textArea: 'bg-gray-400 bg-opacity-50 border-b-1 text-gray-200',

                }
            },
            blue: {
                menuDiv: 'bg-blue-200  bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                selectThemeInput: 'bg-blue-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-blue-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-blue-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-blue-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            red: {
                menuDiv: 'bg-red-200  opacity-70 border-b-2 border-b-gray-100 text-black ',
                selectThemeInput: 'bg-red-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-red-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-red-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-red-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-red-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-red-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-red-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            purple: {
                menuDiv: 'bg-purple-200  opacity-70 border-b-2 border-b-gray-100 text-black ',
                selectThemeInput: 'bg-purple-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-purple-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-purple-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-purple-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-purple-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            yellow: {
                menuDiv: 'bg-yellow-200  opacity-70 border-b-2 border-b-gray-100 text-black ',
                selectThemeInput: 'bg-yellow-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-yellow-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-yellow-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-yellow-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            green: {
                menuDiv: 'bg-green-200  opacity-70 border-b-2 border-b-gray-100 text-black ',
                selectThemeInput: 'bg-green-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-green-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-green-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-green-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-green-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-green-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-green-100 bg-opacity-50 border-b-1 text-black',

                }
            }
        },
        aboutUs: {
            light: {
                main: 'bg-gray-300  text-gray-900 ',
                textBox: 'bg-gray-300 '
            },
            dark: {
                main: 'bg-gray-800 ',
                textBox: 'bg-gray-800 text-white '


            },
            blue: {
                main: 'bg-blue-200 text-black',
                textBox: 'bg-blue-200 text-black ',


            },
            red: {
                main: 'bg-red-200  text-black',
                textBox: 'bg-red-200 text-black ',


            },
            purple: {
                main: 'bg-purple-200   text-black ',
                textBox: 'bg-purple-200 text-black ',

            },
            yellow: {
                main: 'bg-yellow-200  text-black ',
                textBox: 'bg-yellow-200 text-black ',

            },
            green: {
                main: 'bg-green-200  0 text-black ',
                textBox: 'bg-green-200 text-black ',

            }
        },
        menu:{
            light: {
                main: 'bg-gray-300  text-gray-900 ',
                title: 'text-gray-900'
            },
            dark: {
                main: 'bg-gray-800 ',
                title: 'text-white'


            },
            blue: {
                main: 'bg-blue-200 text-black',
                title: 'text-black'


            },
            red: {
                main: 'bg-red-200  text-black',
                title: 'text-black'


            },
            purple: {
                main: 'bg-purple-200   text-black ',
                title: 'text-black'

            },
            yellow: {
                main: 'bg-yellow-200  text-black ',
                title: 'text-black'

            },
            green: {
                main: 'bg-green-200  0 text-black ',
                title: 'text-black'
                

            }
        }

    };
    const [currentTheme, setCurrentTheme] = useState('light');
    return (
        <PageContext.Provider value={{ themes, currentTheme, setCurrentTheme, textBoxPosition }}>
            {props.children}
        </PageContext.Provider>
    )

}


export default PageContextProvider;