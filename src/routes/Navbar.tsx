import {component$} from "@builder.io/qwik";
import github from "../../public/github.svg";

const Navbar = component$(() => {
    return (
        <div class="w-screen fixed top">
            <div class="mx-56 h-20 bg-gray-50 flex justify-between px-4 border-b">
                <div class="my-auto text-4xl font-bold">
                    Laravel Helpers
                </div>
                <div class="my-auto text-lg font-light text-gray-500 flex gap-4">
                    <div class="my-auto">
                        v1.0
                    </div>
                    <div class="my-auto">
                        <img src={github} alt="github" width={30} height={30}/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;