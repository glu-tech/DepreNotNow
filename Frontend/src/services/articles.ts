import { ArticleBinauralBeats, ArticleDepressionAndAnxiety, ArticleQuestionaryHelpUs, ArticleRelax } from "../constants/urls";
import { Articles } from "../models/Articles";

export const ArticlesApi = [
    new Articles(1, 'Por que o relaxamento é importante?', 
            'Veja o porque é importante relaxar e como o binaural beats pode te ajudar!', 
            'articleZero', ArticleRelax),
    new Articles(2, 'O que é Binaural Beats?', 
            'Veja como o binaural beats pode te ajudar no dia-a-dia', 
            'articleOne', ArticleBinauralBeats),
    new Articles(3, 'Qual a diferença entre depressão e ansiedade?', 
                'Entenda a diferença entre ansiedade e depressão', 
                'articleTwo', ArticleDepressionAndAnxiety),
    new Articles(4, 'Tens cinco minutinhos? Ajude-nos a melhorar!', 
                'Responda agora nossa pesquisa e ajude-nos a melhorar o app', 
                'articleThree', ArticleQuestionaryHelpUs)
  ];