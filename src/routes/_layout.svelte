<script>
    import {afterUpdate} from 'svelte';
    // import Nav from '../components/Nav.svelte';

    let isLoading = true;

    afterUpdate(() => {
        isLoading = false;
    });
</script>


<!--<Nav {segment}/>-->

<div class="{isLoading ? '' : 'hidden'} fixed top-0 bottom-0 right-0 left-0 w-full h-full z-50">
    <div class=" bg-greyish-brown w-full h-full opacity-75"></div>
    <div class="fixed top-0 bottom-0 right-0 left-0 text-center">
        <div class="flex items-center justify-center h-screen w-screen">
            <span class="w-32 sm:w-40">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 204 204">
                    <g fill="none" fill-rule="evenodd">
                        <path fill="#FFBF44" d="M2 2h200v200H2z"/>
                        <path stroke="#5A4B41" stroke-width="4" d="M2 2h200v200H2z"/>
                        <path fill="#5A4B41" d="M100 2h4v200h-4z"/>
                        <path fill="#5A4B41" d="M2 100h200v4H2zM136.327 67.567l28.282-33.706"/>
                        <g fill="#5A4B41">
                            <path fill="#5A4B41" d="M130 50h44v4h-44z"/>
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate"
                                              from="0 153 51" to="360 153 51" dur="1s" begin="0s"
                                              repeatCount="indefinite"/>
                        </g>
                        <g fill="#5A4B41">
                            <path fill="#5A4B41" d="M30 50h44v4H30z"/>
                            <path fill="#5A4B41" d="M54 30v44h-4V30z"/>
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 51 51"
                                              to="360 51 51" dur="1s" begin="1s" repeatCount="indefinite"/>
                        </g>
                        <g fill="#5A4B41">
                <path fill="#5A4B41" d="M37.858 135.03l31.113 31.112-2.829 2.829-31.113-31.113z"/>
                <path fill="#5A4B41" d="M68.97 137.858L37.859 168.97l-2.829-2.829 31.113-31.113z"/>
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 51 153"
                                  to="360 51 153" dur="1s" begin="2s" repeatCount="indefinite"/>
                        </g>
                        <g fill="#5A4B41">
                            <path fill="#5A4B41" d="M130 145h44v4h-44zM130 155h44v4h-44z"/>
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 153 153"
                                  to="360 153 153" dur="1s" begin="3s" repeatCount="indefinite"/>
                        </g>
                    </g>
                </svg>
            </span>
        </div>
    </div>
</div>

<main>
    <slot></slot>
</main>