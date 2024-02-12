import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/comments.scss"
import { GiscusWidget } from "giscus"

// @ts-ignore
import script from "./scripts/comments.inline"

function Comments({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`comments ${displayClass ?? ""}`}>
      <button type="button" id="comments">
        <h3>Comments & reactions</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="fold"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div id="comments-content">
        <script
          src="https://giscus.app/client.js"
          data-repo="RiverRuby/wiki"
          data-repo-id="R_kgDOK_e4iA"
          data-category="Announcements"
          data-category-id="DIC_kwDOK_e4iM4CdJGp"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="https://vivs-wiki-giscus-css.s3.us-east-2.amazonaws.com/giscus-dark.css"
          data-lang="en"
          crossorigin="anonymous"
          async
        ></script>
      </div>
      {/* <div id="comments-content">
        <div id="comments-content-dark">
          <script
            src="https://giscus.app/client.js"
            data-repo="RiverRuby/wiki"
            data-repo-id="R_kgDOK_e4iA"
            data-category="Announcements"
            data-category-id="DIC_kwDOK_e4iM4CdJGp"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="https://vivs-wiki-giscus-css.s3.us-east-2.amazonaws.com/giscus-dark.css"
            data-lang="en"
            crossorigin="anonymous"
            async
          ></script>
        </div>
        <div id="comments-content-light">
          <script
            src="https://giscus.app/client.js"
            data-repo="RiverRuby/wiki"
            data-repo-id="R_kgDOK_e4iA"
            data-category="Announcements"
            data-category-id="DIC_kwDOK_e4iM4CdJGp"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="https://vivs-wiki-giscus-css.s3.us-east-2.amazonaws.com/giscus-light.css"
            data-lang="en"
            crossorigin="anonymous"
            async
          ></script>
        </div>
      </div> */}
    </div>
  )
}
Comments.css = style
Comments.afterDOMLoaded = script

export default (() => Comments) satisfies QuartzComponentConstructor
