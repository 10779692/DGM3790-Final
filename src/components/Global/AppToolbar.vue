<template>
<div>
    <v-toolbar color="#313f55" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark class="hidden-md-and-up"></v-toolbar-side-icon>
        <router-link to="/" style="text-decoration:none">
            <v-toolbar-title dark style="padding-right:20px;color:#fff;">J Reed Web Design</v-toolbar-title>
        </router-link>
        <v-toolbar-items>
            <div class="hidden-sm-and-down">
                <router-link to="/about">
                    <v-btn flat style="margin-top:25px;">About</v-btn>
                </router-link>
                <router-link to="/portfolio">
                    <v-btn flat style="margin-top:25px;">Portfolio</v-btn>
                </router-link>
                <router-link to="/services">
                    <v-btn flat style="margin-top:25px;">Services</v-btn>
                </router-link>
                <router-link to="/contact">
                    <v-btn flat style="margin-top:25px;">Contact</v-btn>
                </router-link>
                <router-link to="/testimonial">
                    <v-btn flat style="margin-top:25px;">Testimonial</v-btn>
                </router-link>
            </div>
        </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" light absolute>
        <v-toolbar flat>
            <v-toolbar-items>
            </v-toolbar-items>
        </v-toolbar>
        
        <v-list class="pt-0">
            <v-divider></v-divider>
            <v-list-tile>
                <v-list-tile-action>
                    <router-link to="/about">
                        <v-btn flat>About</v-btn>
                    </router-link>
                    <router-link to="/portfolio">
                        <v-btn flat>Portfolio</v-btn>
                    </router-link>
                    <router-link to="/services">
                        <v-btn flat>Services</v-btn>
                    </router-link>
                    <router-link to="/contact">
                        <v-btn flat>Contact</v-btn>
                    </router-link>
                    <router-link to="/testimonial">
                        <v-btn flat>Testimonial</v-btn>
                    </router-link>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>
