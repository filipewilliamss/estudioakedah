# Akedah — revisão de fidelidade às referências

## Correção solicitada
A revisão anterior recortava as ilustrações e remontava textos, cabeçalho e botões. Isso alterava a composição. Esta revisão mantém as oito artes originais completas no desktop (a partir de 960px), na proporção 1672 × 941, sem recorte, distorção, máscara, gradiente adicional ou cabeçalho acima do hero.

Hero, player, agenda, cortes, Em poucas palavras, bastidores, chamada dos patrocinadores e contato usam respectivamente os PNGs originais em public/akedah. O arquivo hero.png foi comparado pixel a pixel à imagem de referência reenviada e é idêntico.

## Implementação e limites
A tipografia e os ornamentos do desktop fazem parte das artes originais. Os textos visuais dessas composições não são selecionáveis nem editáveis por CSS; mudanças futuras de copy exigem atualizar a arte. Há títulos e descrições semânticos equivalentes para leitores de tela. Links, botões, campos e o iframe do vídeo são HTML real, com foco de teclado visível. As áreas de interação são definidas em coordenadas do original e escalam juntas com a imagem.

Abaixo de 960px, a página usa uma apresentação vertical com texto HTML, controles legíveis e as mesmas ilustrações. A fonte Fredoka foi removida da interface; Nunito Sans 900 fornece títulos menos arredondados. O layout de celular não promete reproduzir a imagem horizontal inteira em tamanho reduzido.

## Comportamento
- Navegação principal dentro do próprio hero. Nossa história e outras páginas continuam acessíveis no rodapé auxiliar.
- Reprodução abre o episódio existente nAcTWvqdc-E dentro da tela da TV e substitui os controles ilustrados pelos controles reais do YouTube. Um botão permite fechar a reprodução. Os textos AO VIVO da arte representam o conceito; não há consulta automática de status de transmissão. O perfil da arte é explicitamente ilustrativo e não uma informação dinâmica do convidado.
- A agenda mantém os três cartões ilustrativos exatamente como na referência. Ver detalhes abre um diálogo com os 12 registros anteriores do site, paginação e links. Não se afirmam datas ou convidados confirmados.
- Cortes, quadro especial e bastidores apontam ao canal do YouTube já cadastrado. Patrocinadores abre /podcast/patrocinadores.
- O formulário usa os campos desenhados como moldura dos inputs reais. Ao enviar, prepara um e-mail para contato@akedah.com.br. A instrução de concluir o envio no aplicativo de e-mail aparece ao focar o formulário. Não há envio por servidor.
- A página de contato reutiliza a mesma composição inteira. A página de patrocinadores começa com a arte aprovada e preserva os dados, logos e seleção dos cinco patrocinadores abaixo. Sobre/história, informações adicionais e canais de contato não têm artes específicas entre as oito referências; seus conteúdos permanecem em HTML com a mesma paleta e tipografia de apoio.
- Rotas do Estúdio, serviços, projetos e Daniel Silva permanecem preservadas.

## Verificação
Testes de navegação, ordem das seções, reprodução, agenda, patrocinadores, acessibilidade dos campos e proporção das artes. TypeScript e build de produção.
A visualização por navegador depende do serviço de preview do ambiente. Se o serviço estiver indisponível, os testes de código e a conferência dos arquivos de arte não substituem uma revisão visual no site publicado.
