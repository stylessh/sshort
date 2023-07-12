import { ComponentProps } from "react"

function Logo(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 28"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.042 8.642a14.3 14.3 0 00-.779 8.09A14.103 14.103 0 004.008 23.9a13.592 13.592 0 007.006 3.831c2.655.54 5.407.263 7.907-.797a13.757 13.757 0 006.342-5.473V28h1.053c2.706 0 5.352-.821 7.602-2.36a13.935 13.935 0 005.04-6.282 14.299 14.299 0 00.779-8.09 14.102 14.102 0 00-3.745-7.167A13.591 13.591 0 0028.986.269a13.398 13.398 0 00-7.907.797 13.757 13.757 0 00-6.342 5.473V0h-1.053c-2.706 0-5.352.821-7.602 2.36a13.936 13.936 0 00-5.04 6.282zM12.632 14V2.203c-1.919.18-3.77.846-5.38 1.947a11.792 11.792 0 00-4.265 5.317 12.1 12.1 0 00-.66 6.844 11.934 11.934 0 003.17 6.066 11.5 11.5 0 005.928 3.242c2.246.457 4.574.222 6.69-.675a11.631 11.631 0 005.04-4.13 7.202 7.202 0 01-3.155.724c-4.07 0-7.368-3.375-7.368-7.538zm14.736 11.797V14c0-4.163-3.299-7.538-7.368-7.538-1.13 0-2.2.26-3.156.724a11.63 11.63 0 015.04-4.13 11.336 11.336 0 016.69-.675 11.501 11.501 0 015.93 3.242 11.933 11.933 0 013.168 6.066 12.1 12.1 0 01-.659 6.844 11.79 11.79 0 01-4.264 5.317 11.413 11.413 0 01-5.38 1.947zm-7.473-6.413c-2.823-.057-5.102-2.388-5.157-5.276h1.991c1.57.366 2.808 1.631 3.166 3.238v2.038zm.21 0c2.823-.057 5.102-2.388 5.157-5.276h-1.991c-1.571.366-2.808 1.631-3.166 3.238v2.038zm5.157-5.492c-.055-2.888-2.334-5.219-5.157-5.276v2.037c.358 1.608 1.595 2.873 3.166 3.24h1.991zm-5.367-5.276c-2.823.057-5.102 2.388-5.157 5.276h1.991c1.571-.366 2.808-1.631 3.166-3.238V8.616z"
        className="ccustom"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Logo