<template>
<div class="background">
    <v-container fluid grid-list-md>
        <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
            <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
                <v-card>
                    <v-card-title>
                        <h4>{{ props.item.name }}</h4>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-tile>
                            <v-list-tile-content>Goal:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.Goal }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Purpose:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.Purpose }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Benefits:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.Benefits }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>How:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.How }}</v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-data-iterator>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        rowsPerPageItems: [4],
        pagination: {
            rowsPerPage: 3
        },
        items: [{
                value: false,
                name: 'Website Design',
                Goal: 'To create a user-friendly website for you.',
                Purpose: 'To make viewers happier.',
                Benefits: 'Ease-of-access & mobile-responsive ',
                How: 'Through custom responsive website design',
            },
            {
                value: false,
                name: 'SEO',
                Goal: 159,
                Purpose: 6.0,
                Benefits: 24,
                How: 4.0,
            },
            {
                value: false,
                name: 'Website Hosting',
                Goal: 159,
                Purpose: 6.0,
                Benefits: 24,
                How: 4.0,
            }
        ]
    })
}
</script>

<style>
.background {
    background-color: #313f55;
    padding-top: 50px;
    padding-bottom: 70px;
}
</style>
