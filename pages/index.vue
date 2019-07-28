<template>
  <div class="content">
      <div class="container">
          <div class="row mt-5">
              <div class="col-12">
                  <div class="card">
                      <div class="card-body">
                          <nuxt-link to="/test">Test link</nuxt-link> |
                          <nuxt-link to="/test2">Test link2</nuxt-link>
                          <form @submit.prevent="getVideo">
                              <div class="form-group">
                                  <label for="url">Video Url</label>
                                  <input type="text" id="url" v-model="url" class="form-control">
                              </div>
                              <div class="form-group">
                                  <input type="submit" class="btn btn-block btn-primary" value="Get Video">
                              </div>
                          </form>
                          <hr>
                          Video Link : {{link}}
                          <br>
Hə gördüm gördüm <br>
                          <a class="btn btn-success" v-bind:href="link"> Yühlə qaqa </a>
                      </div>
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
                url : null,
                link : null
            }
        },
        methods : {
            getVideo(){
                this.link = ''
                axios.post('https://nuxt-youtube.herokuapp.com/api/get_video', {url : this.url})
                    .then(res   => {
                        this.link = res.data.link
                    })
            }
        }
    }
</script>