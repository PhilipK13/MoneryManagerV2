export const overrides = `focus:ring-0 focus:outline-none appearance-none`;
export const styles: any = {
    default: {
        style: "focus:border-cBlue text-gray-800 bg-white rounded-md w-full border border-cDarkBlue py-1.5 px-2 appearance-none",
        error: "border border-red-500",
        disabled: "filter brightness-50"
    },
    file: {
        style: "focus:border-indigo-300 text-gray-800 bg-white rounded-xl w-full py-2 px-2 appearance-none",
        error: "border border-red-500",
        disabled: "filter brightness-50"
    },
    blank: {
        style: "",
        error: "",
    }
}
