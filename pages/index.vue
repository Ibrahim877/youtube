<template>
    <div class="content container">
        <div class="row mt-5">
            <div class="col-12">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Video link</a>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/search">Video axtar</nuxt-link>
                    </li>
                </ul>
                <div class="card">
                    <div class="card-body">
                        <h5>YouTube video linkini daxil edin</h5>
                        <hr>
                        <br>
                        <div v-if="error" class="alert alert-danger">{{errorMsg}}</div>
                        <form @submit.prevent="getVideo">
                            <div class="form-group">
                                <input type="url" v-model="videoLink" placeholder="Video Linki" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary float-right" value="Axtar">
                            </div>
                        </form>
                        <div class="clearfix"></div>
                        <div v-if="loading" class="loading mt-3">
                            <div class="spinner-border" role="status"></div>
                            <br>
                            Yüklənir
                        </div>
                    </div>
                </div>
                <div v-if="file" class="card">
                    <div class="card-body">
                        <ul class="video">
                            <li>
                                <img v-bind:src="video.thumbnail" alt="">
                            </li>
                            <li>
                                <b>Başlıq</b> :  {{video.title}}<br>
                                <b>Video id</b> : {{video.id}}<br>
                                <b>Uzunluq</b> : {{video.duration}}<br>
                                <b>Format</b> : {{video.type}}<br>
                                <b>Ölçü</b> : {{video.size}}<br>
                                <a v-bind:href="video.url" class="btn btn-primary">Mp4 yüklə</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        data(){
            return {
                videoLink : null,
                error : false,
                errorMsg : '',
                loading : false,
                file : false,
                video : {}
            }
        },
        methods : {
            getVideo(){
                this.error = false
                this.errorMsg = null
                this.loading = true
                this.file = false
                this.video = {}
                axios.post('http://localhost:3000/api/get_video', {videoLink : this.videoLink})
                    .then(res   => {
                        if(res.data.error){
                            this.error = true
                            this.errorMsg = res.data.error
                        }else{
                            this.file = true
                            this.video = res.data
                        }
                        this.loading = false
                    })
            }
        }
    }
</script>