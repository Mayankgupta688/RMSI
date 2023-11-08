export function HeaderComponent() {
    var age = 100;
    if (age > 20) {
        return <h1>The User is Allowed</h1>
    } else {
        return null
    }
}