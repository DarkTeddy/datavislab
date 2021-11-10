import React, {Component, Fragment} from 'react';
import index from './index.module.css'
import {Button, Card, Divider} from "antd";
import Title from "antd/es/typography/Title";
import {VerticalAlignBottomOutlined, VerticalAlignMiddleOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";

const {Meta} = Card

const prize = [
    {
        img: '/甘雨立绘.png',
        alt: '甘雨',
        title: '最温柔奖',
        date: '2021.11.10'
    },
    {
        img: '/可莉立绘.png',
        alt: '可莉',
        title: '最可爱奖',
        date: '2021.11.11'
    },
    {
        img: '/可莉立绘.png',
        alt: '可莉',
        title: '最可爱奖',
        date: '2021.11.11'
    },
    {
        img: '/可莉立绘.png',
        alt: '可莉',
        title: '最可爱奖',
        date: '2021.11.11'
    },
    {
        img: '/可莉立绘.png',
        alt: '可莉',
        title: '最可爱奖',
        date: '2021.11.11'
    }
]

const paper = [
    {
        title: '就我个人来说，奖对我的意义，不能不说非常重大。 问题的关键究竟为何? 卡耐基在不经意间这样说过，一个不注意小事情的人，永远不会成就大事业。这启发了我， 在这种困难的抉择下，本人思来想去，寝食难安。 经过上述讨论总结的来说， 奖，到底应该如何实现。 了解清楚奖到底是一种怎么样的存在，是解决一切问题的关键。 既然如此， 一般来说， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 经过上述讨论这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 经过上述讨论那么， 既然如此。',
        venue: '我是venue'
    },
    {
        title: '123123',
        venue: '我是第二个venue'
    }
]

const patent = [
    {
        number: '321321.123',
        title: '一种Genshin Impact选美比赛最终由甘雨获胜',
        date: '2021.11.10'
    },
    {
        number: '89076389743',
        title: '我是椰🐏',
        date: '2021.11.11'
    }
]

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: ['1'],
            showPaper: true,
            showPrize: false,
            showPatent: false
        }
    }

    paperClick = () => {
        this.setState({
            showPaper: !this.state.showPaper
        })
    }

    prizeClick = () => {
        this.setState({
            showPrize: !this.state.showPrize
        })
    }

    patentClick = () => {
        this.setState({
            showPatent: !this.state.showPatent
        })
    }

    render() {
        return (
            <div className={index.content}>
                <div>
                    <div className={index.div}>
                        <Title level={2} style={{display: 'inline'}}>论文</Title>
                        {this.state.showPaper === true ?
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignMiddleOutlined/>}
                                    onClick={this.paperClick}>折叠</Button> :
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignBottomOutlined/>}
                                    onClick={this.paperClick}>展开</Button>}
                        <Divider style={{border: "1px solid #595959", marginTop: '10px'}}/>
                    </div>
                    {this.state.showPaper ? <div className={index.showTextDiv}>
                        {paper.map((d, i) => {
                            return (
                                <Fragment key={i}>
                                    <Paragraph className={index.paragraph}>
                                        <blockquote>{d.title}<strong>（{d.venue}）</strong></blockquote>
                                    </Paragraph>
                                    <Divider/>
                                </Fragment>
                            )
                        })}
                    </div> : <></>}
                </div>
                <div>
                    <div className={index.div}>
                        <Title level={2} style={{display: 'inline'}}>奖项</Title>
                        {this.state.showPrize === true ?
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignMiddleOutlined/>}
                                    onClick={this.prizeClick}>折叠</Button> :
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignBottomOutlined/>}
                                    onClick={this.prizeClick}>展开</Button>}
                        <Divider style={{border: "1px solid #595959", marginTop: '10px'}}/>
                    </div>
                    {this.state.showPrize ?
                        <div className={index.showDiv} style={{height: `${Math.ceil(prize.length / 3) * 260}px`}}>
                            {prize.map((d, i) => {
                                return (
                                    <Card key={i} className={index.prizeCard} size={"small"} hoverable={true}
                                          cover={<img className={index.prizeCardImg} src={d.img} alt={d.alt}/>}>
                                        <Meta title={d.title} description={d.date}/>
                                    </Card>
                                )
                            })}
                        </div> : <></>}
                </div>
                <div>
                    <div className={index.div}>
                        <Title level={2} style={{display: 'inline'}}>专利</Title>
                        {this.state.showPatent === true ?
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignMiddleOutlined/>}
                                    onClick={this.patentClick}>折叠</Button> :
                            <Button className={index.button} type={'primary'} shape={'round'}
                                    icon={<VerticalAlignBottomOutlined/>}
                                    onClick={this.patentClick}>展开</Button>}
                        <Divider style={{border: "1px solid #595959", marginTop: '10px'}}/>
                    </div>
                    {this.state.showPatent ? <div className={index.showTextDiv}>
                        {patent.map((d, i) => {
                            return (
                                <Fragment key={i}>
                                    <Paragraph className={index.paragraph}>
                                        <blockquote>[{d.number}]&emsp;{d.title}<span
                                            style={{float: 'right'}}>{d.date}</span></blockquote>
                                    </Paragraph>
                                    <Divider/>
                                </Fragment>
                            )
                        })}
                    </div> : <></>}
                </div>
            </div>
        )
    }
}

export default Achievements