import {component$} from "@builder.io/qwik";
import {appName, appVersion, githubUrl} from "~/variables";
import ImgGithub from '../../public/github.svg?jsx';

const Navbar = component$(() => {
    return (
        <div class="w-screen fixed top">
            <div class="mx-56 h-20 bg-gray-50 flex justify-between px-4 border-b">
                <div class="my-auto text-4xl font-bold">
                    {appName}
                </div>
                <div class="my-auto text-lg font-light text-gray-500 flex gap-4">
                    <div class="my-auto">
                        {appVersion}
                    </div>
                    <div class="my-auto">
                        <a href={githubUrl} target="_blank">
                            <ImgGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;