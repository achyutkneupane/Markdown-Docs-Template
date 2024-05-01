import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
        <head>
            <meta charSet="utf-8"/>
            <link rel="manifest" href="/manifest.json"/>

            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-atom-dark.min.css"
                  integrity="sha512-GZPS1oCebjx8g/ZkrTTvWirW+4wDkzIsilUQPXcZzuDpDzoH5brM2AojiFjo6ObIWeM68ZDostvdjaS9MNYCTg=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.css"
                  integrity="sha512-Dqf5696xtofgH089BgZJo2lSWTvev4GFo+gA2o4GullFY65rzQVQLQVlzLvYwTo0Bb2Gpb6IqwxYWtoMonfdhQ=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css"
                  integrity="sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/match-braces/prism-match-braces.min.css"
                  integrity="sha512-SwPHdIEEQ3lKazpLV9+r1UH4HnpNVlYVdKYgBwD/8QuougtQj6xm5x2xladh3mC/bz+jVWkvYTpKCI1KWD1MWQ=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/inline-color/prism-inline-color.min.css"
                  integrity="sha512-jPGdTBr51+zDG6sY0smU+6rV19GOIN9RXAdVT8Gyvb55dToNJwq2n9SgCa764+z0xMuGA3/idik1tkQQhmALSA=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>

            <RouterHead/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"
                    integrity="sha512-9khQRAUBYEJDCDVP2yw3LRUQvjJ0Pjx0EShmaQjcHa6AXiOv6qHQu9lCAIR8O+/D8FtaCoJ2c0Tf9Xo7hYH01Q=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"
                    integrity="sha512-SkmBfuA2hqjzEVpmnMt/LINrjop3GKWqsuLSSB3e7iBmYK7JuWw4ldmmxwD9mdm2IRTTi0OxSAfEGvgEi0i2Kw=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.js"
                    integrity="sha512-st608h+ZqzliahyzEpETxzU0f7z7a9acN6AFvYmHvpFhmcFuKT8a22TT5TpKpjDa3pt3Wv7Z3SdQBCBdDPhyWA=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"
                integrity="sha512-BttltKXFyWnGZQcRWj6osIg7lbizJchuAMotOkdLxHxwt/Hyo+cl47bZU0QADg+Qt5DJwni3SbYGXeGMB5cBcw=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/highlight-keywords/prism-highlight-keywords.min.js"
                integrity="sha512-E3XXsxYiuf6ubCxdJItztKLq7D53aNcZPu5NDUuOKWjv/sy2Yg+6m0uT/pEbzI6sk68su/B+xYzYMNgJevx2fw=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/show-language/prism-show-language.min.js"
                integrity="sha512-d1t+YumgzdIHUL78me4B9NzNTu9Lcj6RdGVbdiFDlxRV9JTN9s+iBQRhUqLRq5xtWUp1AD+cW2sN2OlST716fw=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"
                integrity="sha512-/kVH1uXuObC0iYgxxCKY41JdWOkKOxorFVmip+YVifKsJ4Au/87EisD1wty7vxN2kAhnWh6Yc8o/dSAXj6Oz7A=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/match-braces/prism-match-braces.min.js"
                integrity="sha512-1V2DjbHHHr8KzGoafg/R5GoT/+5A5WJBvno03LEL1unbfCLy4PLTQ2Trcrp+qfvTEtyI9Uj825deuInXoRkOyA=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/inline-color/prism-inline-color.min.js"
                integrity="sha512-QK2YjLmowNZnKMI1UZNu0NxMPQZ3oxsbz2rRzmHt+xth2mKyFqied1D2TSDbSX+vAjHEgdWYZF/i4YI9sD0aNw=="
                crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
        </head>
        <body lang="en" class="line-numbers match-braces highlight-keywords inline-color">
        <RouterOutlet/>
        <ServiceWorkerRegister/>
        </body>
    </QwikCityProvider>
  );
});
