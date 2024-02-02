export default {
  async afterCreate(event) {
    let ticketId;

    if (event.params.data.ticket && event.params.data.ticket.connect) {
      ticketId = event.params.data.ticket.connect[0].id; //set id untuk strapi
    } else {
      ticketId = event.params.data.ticket; //set id untuk postman
    }

    if(ticketId){
      await strapi.entityService.update('api::ticket.ticket', ticketId, { data: {status: 'answered'} });
    }
  },
};
