<template>
  <div class="markdown-content">
    <h1>
      <router-link :to="page.permalink" class="essay-title">
        {{ page.attributes.title }}
      </router-link>
    </h1>
    <p class="meta" v-if="showDate">
      <i class="iconfont iconfont-essay icon-icon01"></i>
      {{ '写于' + essayDate() }}
    </p>
    <h4 v-if="page.attributes.subTitle">{{ page.attributes.subTitle }}</h4>
    <div class="markdown-section" v-html="showContent()"></div>
  </div>
</template>

<script>
import Moment from 'moment'
import { marked } from '../utils/index'
import '../assets/prism.css'

export default {
  props: {
    'page': {
      type: Object
    },
    'showAllContent': {
      type: Boolean,
      default: true
    },
    'showDate': {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showContent() {
      const content = this.page.body
      const moreIndex = content.indexOf('<!--more-->')
      const showPart = moreIndex > -1 && !this.showAllContent
      const showContent = showPart ? content.slice(0, moreIndex) : content
      const moreBtn = showPart ? `<a class="unfold fold-btn" href=${this.page.permalink}>显示全文~</a>` : ''
      return marked(showContent) + moreBtn
    },
    essayDate() {
      return Moment(this.page.attributes.date).format("YYYY年MM月DD日");
    }
  }
}
</script>
