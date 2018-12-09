<template>
<div class="backgroundContact">
    <v-layout column wrap class="my-5" align-center>

        <v-flex xs12>
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <img src="https://i2.wp.com/jreedwebdesign.com/wp-content/uploads/2018/04/J-Reed-Web-Design-Logo-2.png?w=1080&ssl=1">
                    </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-xs-center">Contact Us</div>
                                </v-card-title>
                                <v-card-text>
                                    <p>(385) 309-2867</p>
                                    <p>jreedwebdesign@gmail.com</p>
                                </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md8>
                        <div class="container">
                            <div class="content">
                                <form method="post" data-netlify="true">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input class="form-field" name="name" id="name" placeholder="Name" /><br><br>

                                    <input class="form-field" name="email" id="email" placeholder="Email" /><br><br>

                                    <textarea class="form-field" name="message" id="message" placeholder="Custom Message" ></textarea><br><br><br>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</div>
</template>

<style scoped>
img {
    max-width: 50%;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

p {
    text-align: center;
}

.content {}

input {
    width: 100%;
    background-color: #f3f3f3;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
}

textarea {
    width: 100%;
    background-color: #f3f3f3;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    resize: none;
}

button {
    background-color: #f3f3f3;
    font-size: 16px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
}

button:hover {
    background-color: #666666;
    color: #fff;
}
</style>
