<template>
<div class="container flex flex-col items-center justify-center gap-3">
    <h3>Olá!</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum purus tincidunt, dictum enim ut, vehicula nisi. Curabitur vehicula laoreet congue. Suspendisse non lobortis eros. Maecenas velit sapien, bibendum quis risus at, tincidunt feugiat lacus. Etiam eu elementum velit. Donec eleifend porta lorem, sit amet elementum felis euismod ut. Mauris consequat, tortor ut ornare euismod, odio diam finibus augue, quis auctor neque arcu vel nisi. Ut luctus nisi vitae velit faucibus gravida. Nam leo erat, faucibus nec facilisis sit amet, fermentum a ex. Vivamus congue sodales magna ac volutpat. Sed consectetur gravida erat, nec elementum enim facilisis quis. Fusce molestie ultrices rutrum. Nullam at efficitur turpis. Quisque vulputate finibus lacus vel ultricies. Cras at eros fermentum neque euismod pulvinar. Ut at semper dui, quis pharetra mauris.</p>
    <hr>
    <h3>Quem sou eu</h3>
    <p>Vestibulum blandit leo ipsum, non semper mi finibus ac. Donec porttitor, velit vitae pellentesque dapibus, leo dui pharetra eros, varius placerat eros ligula vitae magna. Vivamus augue sapien, luctus at consequat id, fringilla vitae sem. Nam pellentesque egestas velit, in aliquam odio tincidunt vel. Fusce pellentesque tortor non ante sollicitudin, blandit pellentesque est mollis. Integer malesuada massa in nunc consectetur, in tempus odio facilisis. Duis aliquet felis vel felis convallis tincidunt. Etiam consectetur molestie mauris sit amet semper. Morbi porttitor neque id libero rhoncus, in volutpat dui bibendum.</p>
    <div class="flex items-center gap-8">
        <h3>Vem Cooperar</h3>
        <a href="/" class="btn btn-github"><svg class="h-8 w-8" style="color: rgb(250, 250, 250);" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" fill="#fafafa"></path>
            </svg></a>
    </div>
    <hr>
    <p>Duis in ipsum lectus. Proin in sapien diam. Etiam faucibus semper pharetra. Sed quis ligula lobortis, molestie nisi sit amet, blandit sapien. Fusce ac orci vehicula, lobortis libero vitae, vulputate lacus. Donec pretium neque ac mattis tincidunt. Maecenas a arcu quis risus efficitur vehicula vitae sed est. Proin a efficitur velit. Donec vel turpis pulvinar, hendrerit nunc sed, vehicula orci.</p>
    <div class="flex items-center gap-8">
        <hr>
        <h3>Me paga um café</h3>
        <a href="/" class="btn btn-patreon"><svg class="h-8 w-8" style="color: rgb(249, 104, 84);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" fill="#f96854"></path>
            </svg></a>
    </div>
    <p>Fusce tempor nibh enim, et rhoncus libero interdum vitae. Cras porttitor dignissim nulla. Vivamus id suscipit elit. In lobortis nunc nec feugiat commodo. Maecenas sed lectus nec est pellentesque suscipit. Nam purus augue, pretium et lobortis a, blandit dapibus nunc. Vestibulum nec sapien eget nulla scelerisque porta.</p>
</div>
</template>

<style scoped>
h3 {
    @apply font-title;
    @apply text-3xl;
    @apply uppercase;
}

.btn-patreon {
    @apply px-3;
    @apply py-1;
    @apply bg-[#052d49];
    @apply hover:bg-[#000f2b];
}

.btn-github {
    @apply px-3;
    @apply py-1;
    @apply bg-[#333];
    @apply hover:bg-[#171717];
}
</style>
