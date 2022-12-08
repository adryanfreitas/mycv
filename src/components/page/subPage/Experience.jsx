import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Experience() {
  return (
    <Box mt={3} ml={6}>
      <Typography variant="h6">Experiência</Typography>
      <Box sx={{ height: 2, background: "black" }} />
      <Box mt={3} display="flex">
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              2021-2022
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography ml={4} variant="subtitle1" fontWeight="bold">
              Rocketseat
            </Typography>
            <Typography ml={4} variant="subtitle2" fontWeight="bold">
              Na Rocketseat você vai encontrar aulas para dominar HTML, CSS,
              JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais. "O
              Discover em união com a maratona Discover são simplesmente
              incríveis, muito conteúdo, além de te guiar a como ter disciplina
              nos estudos, te mostrando que só você pode mudar e evoluir como
              dev."
            </Typography>
          </Grid>
          <Grid item xs={2} mt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              2021-2022
            </Typography>
          </Grid>
          <Grid item xs={10} mt={2}>
            <Typography ml={4} variant="subtitle1" fontWeight="bold">
              Duolingo
            </Typography>
            <Typography ml={4} variant="subtitle2" fontWeight="bold">
              O aplicativo de idiomas Duolingo é o jeito mais popular do mundo
              de aprender um idioma. A missão da empresa é desenvolver a melhor
              educação do planeta e torná-la disponível a todos.
            </Typography>
          </Grid>
          <Grid item xs={2} mt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              2020-2021
            </Typography>
          </Grid>
          <Grid item xs={10} mt={2}>
            <Typography ml={4} variant="subtitle1" fontWeight="bold">
              Wizard
            </Typography>
            <Typography ml={4} variant="subtitle2" fontWeight="bold">
              Com a Wizard, você se torna fluente em até 8 idiomas. Confira os
              cursos, metodologia, materiais e modalidades de aula. Você tem a
              possibilidade de fazer o nosso curso de inglês online ou fazer as
              aulas presenciais, na escola mais próxima da sua casa.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
