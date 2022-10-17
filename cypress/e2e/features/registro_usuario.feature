Feature: Registro de usuario

    Scenario Outline: Completar existosamente el registro
        Given que ingreso a la pagina todotest
        And entro a la opcion de Registro
        When completo la informacion del registro
            | <codigoPostal> | <telefono> | <cuandoPresentasExamen> | <motivoCarnetConduccion> | <tipoPermiso> | <libreMatriculado> | <soyProfesional> | <contrasena> | <recibirActualizaciones> |
        Then se debe validar el mensaje: Activa tu cuenta ahora        

        Examples:
            | codigoPostal | telefono   | cuandoPresentasExamen | motivoCarnetConduccion | tipoPermiso            | libreMatriculado | soyProfesional | contrasena          | recibirActualizaciones |
            | 35014        | 3497959308 | En mas de 3 meses     | Laborales              | D1/D (Autobús)         | Libre            | No             | contra1234          | No                     |
            | 35014        | 3497959308 | En menos de 3 meses   | No Depender            | Na                     | Na               | Si             | PaseAPuntosColombia | Si                     |
            | 35014        | 3497959308 | En mas de 3 meses     | Ocio                   | Recuperación de puntos | Matriculado      | No             | ThisIsAPassword     | No                     |