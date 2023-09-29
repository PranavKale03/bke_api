# #!/usr/bin/python
# print ('python')

BASE_PATH = '/Users/aryan/OneDrive/Desktop/bke/src/Apps/API'
CONTROLLERS_DIR = BASE_PATH + '/controllers'
MODELS_DIR = BASE_PATH + '/models'

from imghdr import what
from operator import mod
from venv import create
from prompt_toolkit import prompt
from os import listdir

def createControllerFile(model, type):
    template = open('{}/{}{}.controller.js'.format(CONTROLLERS_DIR, 'AModel', type)).read()
    code = template.replace('AModel', model)
    fileName = '{}/{}{}.controller.js'.format(CONTROLLERS_DIR, model, type)
    f = open(fileName, 'w+')
    f.write(code)
    f.close()

def createControllers():
    print ('')
    model = prompt('Name of the model: ')
    if not model:
        print ('Please provide name of the model')
    allOrOneController = prompt('Do you want to create all controllers for the model or just one? (all/one): ')
    if allOrOneController == 'one':
        print ('Select name of the controller to be created:')
        print ('1. {}ByIdController'.format(model))
        print ('2. {}CreateController'.format(model))
        print ('4. {}DeleteById'.format(model))
        print ('3. {}SearchController'.format(model))
        print ('4. {}UpdateController'.format(model))
        selectedController = int(prompt ('Your answer: '))
        if selectedController == 1:
            createControllerFile(model, 'ById')
            print ('\nController has been created!')
        elif selectedController == 2:
            createControllerFile(model, 'Create')
            print ('\nController has been created!')
        elif selectedController == 3:
            createControllerFile(model, 'Search')
            print ('\nController has been created!')
        elif selectedController == 4:
            createControllerFile(model, 'Update')
            print ('\nController has been created!')
        else:
            print ('Invalid selection, try again !')
    elif allOrOneController == 'all':
        print ('I will cerate following controllers:')
        print ('{}ById.controller.js'.format(model))
        print ('{}Create.controller.js'.format(model))
        print ('{}Search.controller.js'.format(model))
        print ('{}Update.controller.js'.format(model))
        yn = prompt('You want to continue and create the controllers (y/n): ')
        if (yn == 'y'):
            createControllerFile(model, 'ById')
            createControllerFile(model, 'Create')
            createControllerFile(model, 'Search')
            createControllerFile(model, 'Update')
        else:
            print ('\nBye bye !')
        print ('\nAll controller have been created!')

def genControllersAllModels():
    files = listdir(MODELS_DIR)
    models = []
    for file in files:
        if ('model.js' in file):
            models.append(file.replace('.model.js', ''))
    for model in models:
        print ('Creating controllers for {} model'.format(model))
        createControllerFile(model, 'ById')
        createControllerFile(model, 'Create')
        createControllerFile(model, 'DeleteById')
        createControllerFile(model, 'Search')
        createControllerFile(model, 'Update')
    print ('\nControllers for all models created !')


if __name__ == '__main__':
    print ('What do you want to do?')
    print ('1. Generate a controllers for a model')
    print ('2. Generate all controllers for all models')
    print ('3. Create association')
    whatToDo = int(prompt('Your answer: '))
    
    if whatToDo == 1:
        createControllers()
    elif whatToDo == 2:
        genControllersAllModels()
    elif whatToDo == 3: 
        print ('Creating associations is not supported right now.')
    else:
        print ('Sorry, I can\'t help you with your request')