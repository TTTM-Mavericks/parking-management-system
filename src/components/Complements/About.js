import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
export default function About() {
    return (
        <div>
            {/* ///////////////////////////// TESTIN //////////////////////// */}
            <Grid container spacing={5} p={5}>
                <Grid item xs={6} >
                    <Typography paragraph={true} align={'left'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    {/* -------------------------------- Accordion ---------------------------------- */}
                    <Accordion disabled>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            Bootstrap
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </AccordionDetails>
                    </Accordion>

                    {/* ------------------------------Form Control -------------------------------------- */}
                    <FormControl sx={{ mt: '70px' }}>
                        <FormLabel>
                            Which framework do you want to use ?
                        </FormLabel>
                        <RadioGroup row defaultValue='bootstrap4'>
                            <FormControlLabel value='bootstrap' control={<Radio />} label='Boostrap' />
                            <FormControlLabel value='bootstrap1' control={<Radio />} label='Boostrap1' />
                            <FormControlLabel value='bootstrap2' control={<Radio />} label='Boostrap2' />
                            <FormControlLabel value='bootstrap3' control={<Radio />} label='Boostrap3' />
                            <FormControlLabel value='bootstrap4' control={<Radio />} label='Boostrap4' />
                            <FormControlLabel value='bootstrap5' control={<Radio />} label='Boostrap5' />
                            <FormControlLabel value='bootstrap6' control={<Radio />} label='Boostrap6' />
                        </RadioGroup>
                    </FormControl>



                </Grid>



                <Grid container item xs={6} spacing={4} align='justify'>
                    <Grid item xs={4}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                        <FormControl sx={{ mt: 8 }}>
                            <FormLabel>
                                Which browser do use usually use ?
                            </FormLabel>
                            <RadioGroup row defaultValue='brave'>
                                <FormControlLabel value='google' control={<Radio />} label='Google' />
                                <FormControlLabel value='brave' control={<Radio />} label='Brave' />
                                <FormControlLabel value='safari' control={<Radio />} label='Safari' />
                                <FormControlLabel value='internet_explorer' control={<Radio />} label='Internet_Explorer' />
                                <FormControlLabel value='internet' control={<Radio />} label='Internet' />
                            </RadioGroup>
                        </FormControl>


                    </Grid>
                    <Grid item xs={8}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Grid>


                </Grid>
                <Grid item xs={5} >
                    <Typography paragraph={true} align={'left'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            Bootstrap
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={7}>
                    <Typography paragraph={true} align='justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            Material UI 5
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            {/* ------------------------- Stack ------------------------------ */}
            <Stack direction={'row'} spacing={3} pt={15} pl={55} >
                <Button variant='text'>Detail</Button>
                <Button variant='contained'>Detail</Button>
                <Button variant='outlined'>Detail</Button>
                <Button disabled>Detail</Button>
                <Button variant='outlined' startIcon={<HomeIcon />}>Home</Button>
                <Button variant='outlined' startIcon={<PhoneIcon />}>Phone</Button>
            </Stack>
        </div>
    )
}