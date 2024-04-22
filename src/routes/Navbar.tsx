import {component$} from "@builder.io/qwik";

const Navbar = component$(() => {
    return (
        <div class="w-screen fixed top">
            <div class="mx-56 h-20 bg-white border">
                Navbar
            </div>
        </div>
    );
});

export default Navbar;