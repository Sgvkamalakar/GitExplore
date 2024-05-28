// Function to initialize the Shepherd.js tour
function initTour() {
    // Initialize Shepherd tour
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true
      }
    });
  
  
    tour.addStep({
      id: 'step-1',
      text: 'Welcome to the Git-Explore!',
      attachTo: {
        element: '#h1',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Skip',
          action: tour.cancel
        },
        {
          text: 'Next ⏭️',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'step-2',
      text: 'Select a programming language to get started.',
      attachTo: {
          element: '#language',
          on: 'bottom'
      },
      buttons: [
        {
          text: 'Back 🔙',
          action: tour.back
        }
        ,
        {
          text: 'Skip ',
          action: tour.cancel
        },
        {
          text: 'Next ⏭️',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'step-3',
      text: 'You can optionally enter a topic related to the repositories you want to search for.',
      attachTo: {
          element: '#topic-text',
          on: 'top'
      },
      buttons: [
        {
          text: 'Back 🔙',
          action: tour.back
        }
        ,
        {
          text: 'Skip ',
          action: tour.cancel
        },
        {
          text: 'Next ⏭️',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'step-4',
      text: 'Select how you want to sort the repositories - by Stars or Forks.',
      attachTo: {
          element: '#sort',
          on: 'bottom'
      },
      buttons: [
        {
          text: 'Back 🔙',
          action: tour.back
        }
        ,
        {
          text: 'Skip ',
          action: tour.cancel
        },
        {
          text: 'Next ⏭️',
          action: tour.next
        }
      ]
    });


    

    tour.addStep({
      id: 'step-5',
      text: 'Click the Search button to fetch the top GitHub repositories for the selected language.',
      attachTo: {
        element: 'button[type="submit"]',
        on: 'top'
      },
      buttons: [
        {
          text: 'Back 🔙',
          action: tour.back
        }
        ,
        {
          text: 'Skip ',
          action: tour.cancel
        },
        {
          text: 'Next ⏭️',
          action: tour.next
        }
      ]
    });
  
    tour.addStep({
      id: 'step-6',
      text: 'Here are the top repositories displayed as flip cards. Hover over them to see more details.',
      attachTo: {
        element: '#repos',
        on: 'top'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Finish',
          action: tour.complete
        }
      ]
    });
  
    tour.start();
  }
  
  document.getElementById('start-tour-btn').addEventListener('click', function() {
    initTour();
  });
  