export default function toggleDarkMode(state?: boolean) {

    const body = document.querySelector("body").classList;
    if (state === false) {
        body.remove("dark");
    } else if (state === true || state === undefined) {
        body.add("dark");
    }
}