<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">
      <h1>{{ article.title }}</h1>
      <artrcle-mate  :article="article"/>
    </div>
  </div>

  <div class="container page">
    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
    </div>
    <hr />

    <div class="article-actions">
      <artrcle-mate  :article="article" />
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-8 offset-md-2">
         <artrcle-components :article="article" />
      </div>
    </div>
  </div>

</div>

</template>
<script>
import { getArticle } from '@/api/article'
//展示MarkownIt格式数据 使用markdown-it库
import MarkownIt from 'markdown-it'
import artrcleMate from './components/article-mate.vue'
import artrcleComponents from './components/article-components.vue'

export default {
  components: { 
    artrcleMate, 
    artrcleComponents
  },
  name:'articleIndex',
  async asyncData( { params } ) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    let md = new MarkownIt()
    article.body = md.render(article.body)
    return {
      article
    }
  }, 
  //使用自定义head头，设置页面的meta优化seo。 
  head () {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description }
      ]
    }
  }
}
</script>
