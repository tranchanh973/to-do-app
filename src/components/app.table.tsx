'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { Todo } from "../types/Todo";
import { useContext } from "react";
import { TodoContext } from "../context/AppContext";

const AppTable = () => {

    const { isFilter } = useContext(TodoContext);

    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // // Lay du lieu tu localStorage khi ung dung chay
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTodos = localStorage.getItem("todos");
            if (savedTodos) setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const filteredTodos = isFilter ? todos.filter(todo => todo.completed) : todos.filter(todo => !todo.completed);

    const addTodo = () => {
        if (title.trim() === "" || description.trim() === "") return;
        const newTodos = [...todos, { id: Date.now(), title, description, completed: false }];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTitle("");
        setDescription("");
    };

    const removeTodo = (index: number) => {
        const newTodos = todos.filter((_, i: number) => i !== index);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const completeTodo = (index: number) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div className="h-[calc(100vh-64px)] w-[98%] mx-auto p-4 border border-gray-300 rounded-md scroll-pb-16">
            <div className="flex gap-2 mt-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border p-2 flex-1 rounded-md"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detail"
                    className="border p-2 flex-1 rounded-md"
                />
                <button
                    onClick={addTodo}
                    className="bg-[#9395D3] text-white px-4 py-2 rounded-md hover:bg-[#7A7CB2]"
                >
                    Add
                </button>
            </div>

            <div className="space-y-4 pb-16">
                {todos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            className="mt-10"
                            src="/img/no-todo.png"
                            alt="no-todos"
                            width={100}
                            height={100}
                            priority
                        />
                        <div className="text-center text-[#7A7CB2] text-lg mt-2">
                            Don't have any todo
                        </div>
                    </div>

                ) : (
                    filteredTodos.map((todo, index) => (
                        <div
                            key={index}
                            className="h-[82px] w-[96.6%] bg-white flex items-center mx-2 my-7 border border-black rounded-md last:!mb-8"

                        >
                            <div className="flex flex-col items-center justify-between flex-1 mx-5">
                                <div className="flex justify-center items-center text-[#9395D3] uppercase font-bold">
                                    {todo.title}
                                </div>
                                <div className="flex justify-center items-center">
                                    {todo.description}
                                </div>
                            </div>

                            <div className="flex flex-row items-center flex-1 justify-end mr-5 gap-5">
                                {!todo.completed && (
                                    <svg
                                        onClick={() => completeTodo(index)}
                                        style={{ cursor: "pointer" }}
                                        className="flex justify-center items-center w-[25px]"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.20834 8.50019C1.20859 5.02154 3.6661 2.02748 7.07795 1.34906C10.4898 0.670638 13.9058 2.49679 15.2368 5.71073C16.5678 8.92467 15.4432 12.6313 12.5507 14.5637C9.6582 16.4962 5.80341 16.1163 3.34376 13.6564C1.97634 12.2889 1.2082 10.4341 1.20834 8.50019Z"
                                            stroke="#B3B7EE"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M4.85419 8.50018L7.2844 10.9304L12.1459 6.06998"
                                            stroke="#B3B7EE"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                                <svg
                                    className="flex justify-center items-center w-[25px]"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3029 8.27088C13.562 7.94766 13.51 7.47565 13.1868 7.2166C12.8635 6.95755 12.3915 7.00957 12.1325 7.33279L13.3029 8.27088ZM6.57396 15.4675L7.14199 15.9572C7.14785 15.9504 7.15358 15.9435 7.15919 15.9365L6.57396 15.4675ZM6.39583 15.9029L5.64729 15.8541L5.64664 15.8682L6.39583 15.9029ZM6.25 19.0518L5.5008 19.0171C5.49908 19.0544 5.50013 19.0917 5.50396 19.1288L6.25 19.0518ZM7.06979 19.7675L7.09431 20.5171C7.14433 20.5154 7.19406 20.5088 7.24275 20.4972L7.06979 19.7675ZM10.1948 19.0268L10.3678 19.7567L10.3794 19.7538L10.1948 19.0268ZM10.5958 18.7727L11.1744 19.25L11.1809 19.2419L10.5958 18.7727ZM17.4726 11.396C17.7317 11.0729 17.6798 10.6009 17.3567 10.3417C17.0336 10.0826 16.5615 10.1345 16.3024 10.4576L17.4726 11.396ZM12.1358 7.33259C11.8766 7.65572 11.9285 8.12775 12.2516 8.38691C12.5747 8.64606 13.0468 8.5942 13.3059 8.27107L12.1358 7.33259ZM14.375 5.73933L14.9601 6.20857C14.9699 6.19628 14.9794 6.18369 14.9885 6.1708L14.375 5.73933ZM16.0719 5.406L16.5517 4.82956C16.5278 4.80968 16.5027 4.7913 16.4765 4.77453L16.0719 5.406ZM18.4021 7.34558L18.9329 6.81574C18.9166 6.79943 18.8996 6.78388 18.8819 6.76914L18.4021 7.34558ZM18.7531 8.20066L19.503 8.20478V8.20478L18.7531 8.20066ZM18.3927 9.05183L17.8677 8.51619C17.8465 8.53703 17.8265 8.55911 17.8078 8.58232L18.3927 9.05183ZM16.3026 10.4573C16.0433 10.7803 16.095 11.2524 16.418 11.5117C16.741 11.771 17.2131 11.7194 17.4724 11.3963L16.3026 10.4573ZM13.4626 7.69068C13.4012 7.28104 13.0193 6.99873 12.6097 7.06011C12.2 7.1215 11.9177 7.50334 11.9791 7.91298L13.4626 7.69068ZM16.9885 11.67C17.3989 11.6142 17.6864 11.2363 17.6307 10.8259C17.5749 10.4154 17.197 10.1279 16.7865 10.1837L16.9885 11.67ZM12.1325 7.33279L5.98873 14.9984L7.15919 15.9365L13.3029 8.27088L12.1325 7.33279ZM6.00593 14.9777C5.79436 15.2231 5.66851 15.5308 5.64742 15.8541L7.14424 15.9517C7.14411 15.9537 7.14332 15.9557 7.14199 15.9572L6.00593 14.9777ZM5.64664 15.8682L5.5008 19.0171L6.9992 19.0865L7.14503 15.9376L5.64664 15.8682ZM5.50396 19.1288C5.58735 19.9373 6.28192 20.5436 7.09431 20.5171L7.04527 19.0179C7.02012 19.0187 6.99862 18.9999 6.99604 18.9749L5.50396 19.1288ZM7.24275 20.4972L10.3678 19.7566L10.0218 18.297L6.89683 19.0377L7.24275 20.4972ZM10.3794 19.7538C10.6912 19.6746 10.9697 19.4981 11.1744 19.2499L10.0173 18.2954C10.0155 18.2976 10.013 18.2992 10.0102 18.2999L10.3794 19.7538ZM11.1809 19.2419L17.4726 11.396L16.3024 10.4576L10.0107 18.3035L11.1809 19.2419ZM13.3059 8.27107L14.9601 6.20857L13.7899 5.27009L12.1358 7.33259L13.3059 8.27107ZM14.9885 6.1708C15.1425 5.95177 15.4418 5.89299 15.6672 6.03747L16.4765 4.77453C15.5747 4.19663 14.3777 4.43177 13.7615 5.30787L14.9885 6.1708ZM15.5921 5.98244L17.9223 7.92202L18.8819 6.76914L16.5517 4.82956L15.5921 5.98244ZM17.8713 7.87542C17.9563 7.96059 18.0037 8.0762 18.0031 8.19654L19.503 8.20478C19.5059 7.68425 19.3006 7.18416 18.9329 6.81574L17.8713 7.87542ZM18.0031 8.19654C18.0024 8.31688 17.9537 8.43196 17.8677 8.51619L18.9177 9.58747C19.2894 9.22312 19.5002 8.72531 19.503 8.20478L18.0031 8.19654ZM17.8078 8.58232L16.3026 10.4573L17.4724 11.3963L18.9776 9.52134L17.8078 8.58232ZM11.9791 7.91298C12.3405 10.3245 14.5722 11.9983 16.9885 11.67L16.7865 10.1837C15.1832 10.4015 13.7023 9.29086 13.4626 7.69068L11.9791 7.91298Z"
                                        fill="#B3B7EE"
                                    />
                                </svg>
                                <svg
                                    onClick={() => removeTodo(index)}
                                    style={{ cursor: "pointer" }}
                                    className="flex justify-center items-center w-[25px]"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.8406 9.37512H8.15936C7.68014 9.37512 7.29166 9.76361 7.29166 10.2428V17.1876C7.29166 18.6259 8.45758 19.7918 9.89582 19.7918H15.1042C15.7948 19.7918 16.4572 19.5174 16.9456 19.029C17.434 18.5407 17.7083 17.8783 17.7083 17.1876V10.2428C17.7083 9.76361 17.3198 9.37512 16.8406 9.37512Z"
                                        stroke="#B3B7EE"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.625 7.29175L15.5146 7.07196C14.9436 5.92982 13.7764 5.20833 12.4995 5.20833C11.2226 5.20833 10.0553 5.92982 9.48437 7.07196L9.375 7.29175H15.625Z"
                                        stroke="#B3B7EE"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.5135 12.847C11.5135 12.4328 11.1777 12.097 10.7635 12.097C10.3493 12.097 10.0135 12.4328 10.0135 12.847H11.5135ZM10.0135 16.3189C10.0135 16.7331 10.3493 17.0689 10.7635 17.0689C11.1777 17.0689 11.5135 16.7331 11.5135 16.3189H10.0135ZM14.9864 12.847C14.9864 12.4328 14.6507 12.097 14.2364 12.097C13.8222 12.097 13.4864 12.4328 13.4864 12.847H14.9864ZM13.4864 16.3189C13.4864 16.7331 13.8222 17.0689 14.2364 17.0689C14.6507 17.0689 14.9864 16.7331 14.9864 16.3189H13.4864ZM15.625 6.54179C15.2108 6.54179 14.875 6.87758 14.875 7.29179C14.875 7.70601 15.2108 8.04179 15.625 8.04179V6.54179ZM17.7083 8.04179C18.1225 8.04179 18.4583 7.70601 18.4583 7.29179C18.4583 6.87758 18.1225 6.54179 17.7083 6.54179V8.04179ZM9.37499 8.04179C9.7892 8.04179 10.125 7.70601 10.125 7.29179C10.125 6.87758 9.7892 6.54179 9.37499 6.54179V8.04179ZM7.29166 6.54179C6.87744 6.54179 6.54166 6.87758 6.54166 7.29179C6.54166 7.70601 6.87744 8.04179 7.29166 8.04179V6.54179ZM10.0135 12.847V16.3189H11.5135V12.847H10.0135ZM13.4864 12.847V16.3189H14.9864V12.847H13.4864ZM15.625 8.04179H17.7083V6.54179H15.625V8.04179ZM9.37499 6.54179H7.29166V8.04179H9.37499V6.54179Z"
                                        fill="#B3B7EE"
                                    />
                                </svg>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default AppTable;