export default function assert(cond) {
    if (!cond) {
        throw Error("Assertion failed")
    }
}