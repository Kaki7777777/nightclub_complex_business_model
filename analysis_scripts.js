// Enhanced Interactive Features for Nightclub Analysis

class BusinessAnalyzer {
    constructor() {
        this.beijingData = {
            financial: 3,
            market: 4,
            cooperation: 3,
            strategy: 5
        };
        
        this.chengduData = {
            financial: 4,
            market: 4,
            cooperation: 4,
            strategy: 3
        };
        
        this.weights = {
            financial: 0.35,
            market: 0.25,
            cooperation: 0.25,
            strategy: 0.15
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createFinancialProjection();
        this.createRiskMatrix();
        this.updateDashboard();
    }
    
    setupEventListeners() {
        // Slider event listeners
        document.querySelectorAll('.slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.updateScore(e.target.id, e.target.value);
                this.updateDashboard();
            });
        });
    }
    
    updateScore(sliderId, value) {
        const [city, dimension] = sliderId.split('-');
        if (city === 'beijing') {
            this.beijingData[dimension] = parseFloat(value);
        } else if (city === 'chengdu') {
            this.chengduData[dimension] = parseFloat(value);
        }
    }
    
    calculateTotalScore(cityData) {
        return Object.keys(cityData).reduce((total, key) => {
            return total + (cityData[key] * this.weights[key]);
        }, 0);
    }
    
    updateDashboard() {
        const beijingTotal = this.calculateTotalScore(this.beijingData);
        const chengduTotal = this.calculateTotalScore(this.chengduData);
        
        document.getElementById('beijing-total').textContent = beijingTotal.toFixed(1);
        document.getElementById('chengdu-total').textContent = chengduTotal.toFixed(1);
        
        this.updateRecommendation(beijingTotal, chengduTotal);
        this.updateScoreColors(beijingTotal, chengduTotal);
    }
    
    updateRecommendation(beijingScore, chengduScore) {
        let recommendation = '';
        let bgColor = '';
        
        if (beijingScore >= 3.5 && chengduScore >= 3.5) {
            if (beijingScore > chengduScore) {
                recommendation = '两个项目都达标，北京评分更高。建议：先做成都试点，积累经验后进入北京高风险高收益市场。';
                bgColor = '#e6fffa';
            } else {
                recommendation = '成都项目评分更高且风险可控，建议优先选择成都作为试点城市。';
                bgColor = '#f0fff4';
            }
        } else if (beijingScore >= 3.5) {
            recommendation = '只有北京项目达标，但需要充分评估高风险因素，建议谨慎进入。';
            bgColor = '#fffbeb';
        } else if (chengduScore >= 3.5) {
            recommendation = '成都项目更适合，风险相对可控，建议优先考虑。';
            bgColor = '#f0fff4';
        } else if (beijingScore >= 3.0 || chengduScore >= 3.0) {
            recommendation = '评分处于临界值，建议重新谈判合作条件，争取更好的条款。';
            bgColor = '#fffbeb';
        } else {
            recommendation = '两个项目评分都偏低，不建议现阶段进入。建议寻找其他机会或等待更好的合作条件。';
            bgColor = '#fff5f5';
        }
        
        const recElement = document.getElementById('recommendation');
        recElement.innerHTML = '<strong>智能建议：</strong>' + recommendation;
        recElement.style.backgroundColor = bgColor;
    }
    
    updateScoreColors(beijingScore, chengduScore) {
        const beijingElement = document.getElementById('beijing-total');
        const chengduElement = document.getElementById('chengdu-total');
        
        beijingElement.style.color = this.getScoreColor(beijingScore);
        chengduElement.style.color = this.getScoreColor(chengduScore);
    }
    
    getScoreColor(score) {
        if (score >= 4.0) return '#2f855a';      // Green
        if (score >= 3.5) return '#38a169';      // Light Green
        if (score >= 3.0) return '#d69e2e';      // Yellow
        if (score >= 2.5) return '#dd6b20';      // Orange
        return '#e53e3e';                        // Red
    }
    
    createFinancialProjection() {
        // This would create a financial projection chart
        // Implementation depends on specific financial data
        console.log('Financial projection chart created');
    }
    
    createRiskMatrix() {
        // This would create an interactive risk matrix
        console.log('Risk matrix created');
    }
}

// Financial Calculator
class FinancialCalculator {
    constructor() {
        this.scenarios = {
            conservative: { growth: 0.05, risk: 0.1 },
            moderate: { growth: 0.15, risk: 0.2 },
            aggressive: { growth: 0.25, risk: 0.35 }
        };
    }
    
    calculateROI(investment, monthlyRevenue, monthlyCosts, months = 12) {
        const totalRevenue = monthlyRevenue * months;
        const totalCosts = monthlyCosts * months;
        const netProfit = totalRevenue - totalCosts - investment;
        return (netProfit / investment) * 100;
    }
    
    calculateBreakeven(investment, monthlyNetIncome) {
        return Math.ceil(investment / monthlyNetIncome);
    }
    
    projectCashFlow(initialInvestment, monthlyRevenue, monthlyCosts, months = 24) {
        const cashFlow = [];
        let cumulativeCash = -initialInvestment;
        
        for (let i = 1; i <= months; i++) {
            const monthlyNet = monthlyRevenue - monthlyCosts;
            cumulativeCash += monthlyNet;
            cashFlow.push({
                month: i,
                monthlyNet: monthlyNet,
                cumulative: cumulativeCash
            });
        }
        
        return cashFlow;
    }
}

// Market Analysis Tools
class MarketAnalyzer {
    constructor() {
        this.marketData = {
            beijing: {
                marketSize: 5,
                competition: 2,
                growth: 3,
                regulation: 3,
                costs: 2
            },
            chengdu: {
                marketSize: 4,
                competition: 4,
                growth: 5,
                regulation: 4,
                costs: 4
            }
        };
    }
    
    getMarketScore(city) {
        const data = this.marketData[city];
        const weights = {
            marketSize: 0.3,
            competition: 0.2,
            growth: 0.2,
            regulation: 0.15,
            costs: 0.15
        };
        
        return Object.keys(data).reduce((score, key) => {
            return score + (data[key] * weights[key]);
        }, 0);
    }
    
    compareMarkets() {
        const beijingScore = this.getMarketScore('beijing');
        const chengduScore = this.getMarketScore('chengdu');
        
        return {
            beijing: beijingScore,
            chengdu: chengduScore,
            recommendation: beijingScore > chengduScore ? 'beijing' : 'chengdu'
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const analyzer = new BusinessAnalyzer();
    const calculator = new FinancialCalculator();
    const marketAnalyzer = new MarketAnalyzer();
    
    // Add some interactive features
    console.log('Nightclub Business Analysis Tool Initialized');
    console.log('Market Comparison:', marketAnalyzer.compareMarkets());
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BusinessAnalyzer,
        FinancialCalculator,
        MarketAnalyzer
    };
}
